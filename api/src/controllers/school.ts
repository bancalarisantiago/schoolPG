//models
import School from "../models/School/School";

export const getAllSchools = async (req: any, res: any) => {
  try {
    const allSchools = await School.find({});

    res.status(200).json(allSchools);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createSchool = async (req: any, res: any) => {
  const {
    name,
    schoolNumber,
    location,
    description,
    orientation,
    logo,
    email,
    phone,
  } = req.body;
  try {
    const newSchool = new School({
      name,
      schoolNumber,
      location,
      description,
      orientation,
      logo,
      email,
      phone,
    });
    newSchool.save();
    res.status(200).json(newSchool);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
