//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";
import { ICourse } from "../models/Course/ICourse";

//models
import Course from "../models/Course/Course";
import Subject from "../models/Subject/Subject";
import School from "../models/School/School";
import User from "../models/User/User";

export const createCourse = async (req: Request, res: Response) => {
  const { name, shifts, students, teachers, subjects, schoolId } = req.body;
  try {
    const newCourse = new Course({
      name,
      shifts,
      students: students.map((m: any) => new toId(m)),
      teachers: teachers.map((m: any) => new toId(m)),
      subjects: subjects.map((m: any) => new toId(m)),
    });
    newCourse.save();
    await School.findByIdAndUpdate(new toId(schoolId), {
      $push: {
        courses: new toId(newCourse._id),
      },
    });

    students
      ? students.forEach(
          async (m: any) =>
            await User.findByIdAndUpdate(new toId(m), {
              course: new toId(newCourse._id),
              $push: {
                subject: subjects
                  ? subjects.length
                    ? subjects.map((m: any) => new toId(m))
                    : []
                  : [],
              },
            })
        )
      : [];

    teachers
      ? teachers.forEach(
          async (m: any) =>
            await User.findByIdAndUpdate(new toId(m), {
              $push: { course: new toId(newCourse._id) },
            })
        )
      : [];

    subjects
      ? subjects.forEach(
          async (m: any) =>
            await Subject.findByIdAndUpdate(new toId(m), {
              $push: { courses: new toId(newCourse._id) },
            })
        )
      : [];
    res.status(200).json(newCourse);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getCourses = async (req: Request, res: Response) => {
  try {
    const allCourses = await Course.find({});
    res.status(200).json(allCourses);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const populateQuery = [
    { path: "teachers", model: "User" },
    { path: "students", model: "User" },
    { path: "subjects", model: "Subject" },
  ];
  try {
    const course = await Course.findById(id).populate(populateQuery).lean();

    res.status(200).json(course);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const addSubjectToCourse = async (req: Request, res: Response) => {
  const { courseId, subjectId } = req.params;

  try {
    const course = await Course.findByIdAndUpdate(new toId(courseId), {
      $push: {
        subjects: new toId(subjectId),
      },
    });
    const subject = await Subject.findByIdAndUpdate(new toId(subjectId), {
      $push: {
        courses: new toId(courseId),
      },
    });
    res.status(200).json({ message: "relation was created succesfully" });
  } catch (error: any) {
    res.status(404).json({ error: "relation wasn'\t created succesfully" });
  }
};

export const deleteCourseById = async (req: Request, res: Response) => {
  const { id, schoolId } = req.params;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ msg: "Event not found" });
    }

    await School.findByIdAndUpdate(schoolId, {
      $pull: {
        courses: id,
      },
    });

    course.students.length &&
      course.students.map(
        async (m: any) =>
          await User.findByIdAndUpdate(m, {
            $pull: {
              course: id,
            },
          })
      );

    course.teachers.length &&
      course.teachers.map(
        async (m: any) =>
          await User.findByIdAndUpdate(m, {
            $pull: {
              course: id,
            },
          })
      );

    course.subjects.length &&
      course.subjects.map(
        async (m: any) =>
          await Subject.findByIdAndUpdate(m, {
            $pull: {
              courses: id,
            },
          })
      );

    await course.delete();

    res.status(200).json("Curso borrado con exito");
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const attendanceUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const course = await Course.findByIdAndUpdate(id, {
      $push: {
        classes: req.body,
      },
    });

    res.status(200).json(course);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateCourseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { students, teachers, subjects, name, shifts } = req.body;

  try {
    const course = await Course.findOne({ _id: id });
          

    if (course) {
      course?.students.length &&
        course.students.forEach(
          async (fe: any) =>
            await User.findByIdAndUpdate(fe, {
              $pull: {
                course: id,
              },
            })
        );
      course?.teachers.length &&
        course.teachers.forEach(
          async (fe: any) =>
            await User.findByIdAndUpdate(fe, {
              $pull: {
                course: id,
              },
            })
        );
      course?.subjects.length &&
        course.subjects.forEach(
          async (fe: any) =>
            await Subject.findByIdAndUpdate(fe, {
              $pull: {
                courses: id,
              },
            })
        );
      await Course.findByIdAndUpdate(id, {
        students: students,
        teachers: teachers,
        subjects: subjects,
      });

      students &&
        students.length &&
        students.forEach(
          async (fe: any) =>
            await User.findByIdAndUpdate(fe, {
              $push: {
                course: id,
              },
            })
        );

      teachers &&
        teachers.length &&
        teachers.forEach(
          async (fe: any) =>
            await User.findByIdAndUpdate(fe, {
              $push: {
                course: id,
              },
            })
        );

      subjects &&
        subjects.length &&
        subjects.forEach(
          async (fe: any) =>
            await Subject.findByIdAndUpdate(fe, {
              $push: {
                courses: id,
              },
            })
        );

        const newCourse = await Course.updateOne({ _id: id }, {
          $set: {
            name: name,
            shifts: shifts
          }
        });
       
       
      res.status(200).json(newCourse);
    } else {
      res.send("El id del curso no es valido");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
