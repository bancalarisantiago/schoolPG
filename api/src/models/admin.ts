import mongoose from "mongoose";
import { IAdmin } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaAdmin = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
  })
  
const Admin = mongoose.model<IAdmin>("admin", schemaAdmin)

export default Admin;
  