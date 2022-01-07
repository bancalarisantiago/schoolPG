import mongoose from "mongoose";
import { IAdmin } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaAdmin = new Schema({
    user: {
        type: mongoose.Types.ObjectId, ref: "User"
    },
  })
  
const Admin = mongoose.model<IAdmin>("Admin", schemaAdmin)

export default Admin;
  