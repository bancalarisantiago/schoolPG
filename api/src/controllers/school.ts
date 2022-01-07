const models = require ("../models/models")


export const getAllSchools = async (req: any, res: any) => {
    try   {
        const allSchools = await models.SchoolModel.find({});
   // const users = await getUsersApi();

    // users.map((e: any) =>
    //   models.UserModel.create({
    //     name: { first: e.name.first, last: e.name.last },
    //     gender: e.gender,
    //     location: {
    //       number: e.location.street.number,
    //       streetName: e.location.street.name,
    //       locality: e.location.state,
    //       postalCode: String(e.location.postcode),
    //     },
    //   })
    // );
    console.log(allSchools)
    res.status(200).json(allSchools);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }


}


export const createSchool =  async (req: any, res: any) => {
    const { 
        name, 
        schoolNumber, 
        location,
        description, 
        orientation, 
        logo,
        email,
        phone
        } = req.body;
    try {
      const newSchool = new models.SchoolModel({
        name,
        schoolNumber,
        location,
        description,
        orientation,
        logo,
        email,
        phone

      });
      newSchool.save();
      res.status(200).json(newSchool);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }

}

