//types
import { Request, Response } from "express";
import { ISubject } from "../models/Subject/ISubject";

//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//models
import User from "../models/User/User";
import Subject from "../models/Subject/Subject";
import Course from "../models/Course/Course";
import School from "../models/School/School";

export const createSubject = async (req: Request, res: Response) => {
  const { name, teachers, courses, schoolId } = req.body;

  try {
    const newSubject = new Subject({
      name,
      teachers: teachers.map((m: any) => new toId(m._id)),
      courses: courses.map((m: any) => new toId(m._id)),
    });

    newSubject.save();

    await School.findByIdAndUpdate(new toId(schoolId), {
      $push: {
        subjects: new toId(newSubject._id),
      },
    });

    teachers &&
      teachers.length &&
      teachers.map(
        async (m: any) =>
          await User.findByIdAndUpdate(new toId(m._id), {
            $push: {
              subject: new toId(newSubject._id),
            },
          })
      );

    courses &&
      courses.length &&
      courses.map(
        async (m: any) =>
          await Course.findByIdAndUpdate(new toId(m._id), {
            $push: {
              subjects: new toId(newSubject._id),
            },
          })
      );

    res.status(200).json(newSubject);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const getSubjects = async (req: Request, res: Response) => {
  try {
    const allSubjects = await Subject.find({});
    res.status(200).json(allSubjects);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findById(id).populate({
      path: "courses",
      model: "Course",
    });
    res.status(200).json(subject);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteSubjectById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findById(id);
    console.log(subject);
    if (!subject) {
      return res.status(404).json({ msg: "Subject not found" });
    }
    subject.courses.length &&
      subject.courses.map(
        async (m: any) =>
          await Course.findByIdAndUpdate(m, {
            $pull: {
              subjects: id,
            },
          })
      );
    subject.teachers.length &&
      subject.teachers.map(
        async (m: any) =>
          await User.findByIdAndUpdate(m, {
            $pull: {
              subject: id,
            },
          })
      );
    await subject.delete();

    res.status(200).send("La materia fue borrada con exito");
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const addCourseToSubject = async (req: Request, res: Response) => {
  const { subjectId, courseId } = req.params;
  const subject = await Subject.findByIdAndUpdate(new toId(subjectId), {
    $push: {
      courses: new toId(courseId),
    },
  });
  subject
    ? res.send({ message: "relation was created succesfully" })
    : res.send({ error: "relation wasn'\t created succesfully" });
};

export const updateSubjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { course, teacher } = req.body;

  try {
    const subject = await Subject.findOne({ _id: id });

    const courses = JSON.parse(course);
    const teachers = JSON.parse(teacher);

    if (course) {
      subject?.teachers.length &&
        subject.teachers.forEach(
          async (fe: any) =>
            await User.findByIdAndUpdate(fe, {
              $pull: {
                subject: id,
              },
            })
        );
      subject?.courses.length &&
        subject.courses.forEach(
          async (fe: any) =>
            await Course.findByIdAndUpdate(fe, {
              $pull: {
                subjects: id,
              },
            })
        );
      await Subject.findByIdAndUpdate(id, {
        teachers: teachers,
        courses: courses,
      });

      teachers &&
        teachers.length &&
        teachers.forEach(
          async (fe: any) =>
            await User.findByIdAndUpdate(fe, {
              $push: {
                subject: id,
              },
            })
        );

      courses &&
        courses.length &&
        courses.forEach(
          async (fe: any) =>
            await Course.findByIdAndUpdate(fe, {
              $push: {
                subjects: id,
              },
            })
        );
      res.status(200).json(subject);
    } else {
      res.send("El id de la materia no es valido");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};
