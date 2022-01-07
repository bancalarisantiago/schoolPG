import mongoose from "mongoose"

const models = require ("../models/models")

export const getAdmins = async (req: any, res: any) => {
  
}
export const createAdmin =  async (req: any, res: any) => {
    const { 
        name,
        gender, 
        location,
        email,
        phone
        } = req.body;
    try {

        // const user = await models.User.findOne()
        // const idUser = "61d77a7c9436030a804c4ce4"
        // const queryUser = await models.User.findOne({_id : idUser})
            
      const newAdmin = new models.AdminModel({
          
            name: { first: name.first, last: name.last },
            gender,
            location: {
              number: location.number,
              streetName: location.name,
              locality: location.state,
              postalCode: String(location.postcode),
            },
            email,
            phone,
          
      });
        
       // console.log(queryUser)
      newAdmin.save();
      res.status(200).json(newAdmin);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }

}

