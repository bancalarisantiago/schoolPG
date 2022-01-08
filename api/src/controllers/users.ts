//from modules
import axios from "axios";

//models
import User from "../models/User/User";

// https://www.restapitutorial.com/httpstatuscodes.html ---> status codes

const getUsersApi = async function () {
  try {
    const user = await axios.get("https://randomuser.me/api/?results=10");

    return user.data.results;
  } catch {
    return "Error de busqueda";
  }
};

// export const getPosts = async (req:any, res:any) => {
//   try{
//     const postMessages = await PersonModel.find();

//         const users = await getUsers();
//     res.status(200).json(users);
//   } catch (error: any) {
//     res.status(404).json({message: error.message});
//   }
// }

export const getUsers = async (req: any, res: any) => {
  try {
    const postMessages = await User.find();

    const users = await getUsersApi();

    users.map((e: any) =>
      User.create({
        name: { first: e.name.first, last: e.name.last },
        gender: e.gender,
        location: {
          number: e.location.street.number,
          streetName: e.location.street.name,
          locality: e.location.state,
          postalCode: String(e.location.postcode),
        },
      })
    );

    res.status(200).json(users);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req: any, res: any) => {
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
  } = req.body;
  try {
    const newUser = new User({
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
    });
    newUser.save();
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
