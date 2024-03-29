//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";

//models
import User from "../models/User/User";
import School from "../models/School/School";
import Course from "../models/Course/Course";
import Subject from "../models/Subject/Subject";
import { IUser } from "../models/User/IUser";

//from modules
import jwt from "jsonwebtoken";

export const getUsers = async (req: Request, res: Response) => {
  const { prop, sort } = req.body;
  try {
    const userFilters = await User.find(prop).sort(sort);
    res.status(200).json(userFilters);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const populateQuery = [
    { path: "course", model: "Course" },
    { path: "subject", model: "Subject" },
    { path: "school", model: "School" },
  ];
  try {
    const user = await User.findById(id).populate(populateQuery).lean();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const {
    name,
    userType,
    gender,
    location,
    birthdate,
    document,
    username,
    email,
    password,
    phone,
    cellphone,
    picture,
    tutors,
    schoolId,
    courses,
    subject,
  } = req.body;
  try {
    const newUser: IUser = new User({
      name: {
        first: name.first.trim(),
        last: name.last.trim(),
      },
      userType,
      gender,
      location,
      birthdate,
      document,
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password,
      phone,
      cellphone,
      picture,
      tutors,
    });

    newUser.password = await newUser.encryptPassword(password);
    const savedUser = await newUser.save();

    const type = userType + "s";

    schoolId &&
      (await School.findByIdAndUpdate(new toId(schoolId), {
        $push: {
          [type]: new toId(newUser._id),
        },
      }));

    schoolId &&
      (await User.findByIdAndUpdate(new toId(newUser._id), {
        school: new toId(schoolId),
        $push: {
          course: courses
            ? courses.length
              ? courses.map((m: any) => new toId(m._id)).flat()
              : []
            : [],
          subject: subject
            ? subject.length
              ? subject.map((m: any) => new toId(m._id)).flat()
              : []
            : [],
        },
      }));

    courses
      ? courses.length
        ? courses.forEach(
            async (fe: any) =>
              await Course.findByIdAndUpdate(new toId(fe._id), {
                $push: {
                  [type]: new toId(newUser._id),
                },
              })
          )
        : ""
      : "";

    subject
      ? subject.length
        ? subject.map(
            async (m: any) =>
              await Subject.findByIdAndUpdate(new toId(m._id), {
                $push: {
                  teachers: new toId(newUser._id),
                },
              })
          )
        : ""
      : "";

    //token
    const token: string = jwt.sign(
      { _id: savedUser._id },
      process.env.TOKEN_SECRET || "token de minima seguridad"
    );
    res.setHeader("auth-token", token).json(savedUser);
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { course, subject } = req.body;

  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ msg: "Event not found" });
    }

    if (user) {
      if (user.course) {
        user?.course.length &&
          user.course.map(
            async (m: any) =>
              await Course.findByIdAndUpdate(m, {
                $pull: {
                  teachers: id,
                },
              })
          );
      }

      if (user.subject) {
        user?.subject.length &&
          user.subject.map(
            async (m: any) =>
              await Subject.findByIdAndUpdate(m, {
                $pull: {
                  teachers: id,
                },
              })
          );
      }
    }

    course
      ? course.length
        ? course.map(
            async (m: any) =>
              await Course.findByIdAndUpdate(new toId(m._id), {
                $push: {
                  teachers: new toId(id),
                },
              })
          )
        : ""
      : "";

    subject
      ? subject.length
        ? subject.map(
            async (m: any) =>
              await Subject.findByIdAndUpdate(new toId(m._id), {
                $push: {
                  teachers: new toId(id),
                },
              })
          )
        : ""
      : "";

    const newUser = {
      ...req.body,
      course: course,
      subject: subject,
    };
    //actualizar password

    if (newUser.password.length < 10) {
      newUser.password = await new User().encryptPassword(newUser.password);
    }

    const userUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true,
    });
    res.status(200).json(userUpdated);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params; // req.body?
  try {
    const user = await User.findById(id);

    const userType = user?.userType + "s";

    //delete course relation
    user?.course?.map(
      async (m: any) =>
        await Course.findByIdAndUpdate(m, {
          $pull: {
            [userType]: id,
          },
        })
    );

    //delete subject realtion
    user?.userType === "teacher" &&
      user?.subject?.map(
        async (m: any) =>
          await Subject.findByIdAndUpdate(m, {
            $pull: {
              teachers: id,
            },
          })
      );

    //delete school relation
    await School.findByIdAndUpdate(user?.school, {
      $pull: {
        [userType]: id,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "Event not found" });
    }
    const userDeleted = await user.delete();
    return res.status(200).json(userDeleted);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const addUserToSchool = async (req: Request, res: Response) => {
  const { schoolId, userId } = req.params;

  (await addRelation(userId, schoolId)) === "ok"
    ? res.send({ message: "relation was created succesfully" })
    : res.send({ error: "relation wasn'\t created succesfully" });
};

const addRelation = async (userId: string, schoolId: string) => {
  const user = await User.findByIdAndUpdate(new toId(userId), {
    school: new toId(schoolId),
  });

  const type = user?.userType + "s";
  const school = await School.findByIdAndUpdate(new toId(schoolId), {
    $push: {
      [type]: new toId(userId),
    },
  });
  return user && school ? "ok" : "error";
};

export const addRelationTutorChild = async (req: Request, res: Response) => {
  const { tutorId, childId } = req.params;

  const tutor = await User.findByIdAndUpdate(new toId(tutorId), {
    $push: {
      childInCharge: new toId(childId),
    },
  });

  const student = await User.findByIdAndUpdate(new toId(childId), {
    $push: {
      tutors: new toId(tutorId),
    },
  });
  tutor && student
    ? res.send({ tutor, student })
    : res.send("tutor or student wasn't found");
};

export const addUserToCourse = async (req: Request, res: Response) => {
  const { courseId, userId } = req.params;

  (await addRelationUserToCourse(userId, courseId)) === "ok"
    ? res.send({ message: "relation was created succesfully" })
    : res.send({ error: "relation wasn'\t created succesfully" });
};

const addRelationUserToCourse = async (userId: string, courseId: string) => {
  const user = await User.findByIdAndUpdate(new toId(userId), {
    $push: {
      course: new toId(courseId),
    },
  });

  const type = user?.userType + "s";
  const course = await Course.findByIdAndUpdate(new toId(courseId), {
    $push: {
      [type]: new toId(userId),
    },
  });
  return user && course ? "ok" : "error";
};

export const getUserBy = async (req: Request, res: Response) => {
  const { userType, filter, schoolId } = req.body;

  const s = filter.toLowerCase();
  const regex = new RegExp(filter, "i");
  const user = await User.find({ userType: userType })
    .find({
      school: schoolId,
    })
    .find({
      $or: [
        { "name.first": regex },
        { "name.last": regex },
        { username: regex },
        { email: regex },
        { document: regex },
        { cellphone: regex },
      ],
    });

  user ? res.send(user) : res.send("User not found");
};
