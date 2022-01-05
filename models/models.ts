import mongoose from "mongoose";
import { IPerson, IStudent } from "./interfacemodels"

const Schema = mongoose.Schema;

const schemaPerson = new Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  userType: {
    type: Number, // 1 - Admin // 2 - Teacher // 3 - Tutor // 4 - Student
    //required: true
  },
  gender: {
      type: String,
  },
  location: {
    number: { type: Number , required: true },
    streetName: { type: String, required: true },
    locality: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  birthdate: {
    date: {
      type: String,
      //required: true,
    },
    age: {
      type: Number,
      //required: true,
    },
  },
  document: {
    type: Number,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
  },
  phone: {
      type: String,
      //required: true
  },
  cellphone: {
    type: String,
  },
  login: {
    username: {
      type: String,
      //required: true,
    },
    password: {
      type: String,
      //required: true,
    },
  },
  picture: {
      type: String,
      //required: true,
  },


});

const PersonModel = mongoose.model<IPerson>("Person", schemaPerson);
module.exports = PersonModel;
export default PersonModel;

// const schemaStudent = new Schema({
//     person: {
//         type: Schema.Types.ObjectId, ref: "Person"
//     },
//     tutors: {
//       type: Schema.Types.ObjectId, ref: "Tutor"
//     },
//     degree: {
//       type: String,
//     }

// })

// module.exports = mongoose.model<IStudent>("Student", schemaStudent)


// const schemaTutor = new Schema({
//   person: {
//       type: Schema.Types.ObjectId, ref: "Person"
//   },
//   childInCharge: {
//     type: Schema.Types.ObjectId, ref: "Student"
//   },

 
// })

// module.exports = mongoose.model("Tutor", schemaTutor)

// const schemaTeacher = new Schema({
//   person: {
//       type: Schema.Types.ObjectId, ref: "Person"
//   },
 
// })
// module.exports = mongoose.model("Teacher", schemaTeacher)

// const schemaAdmin = new Schema({
//   person: {
//       type: Schema.Types.ObjectId, ref: "Person"
//   },
 
// })

// module.exports = mongoose.model("Admin", schemaAdmin)