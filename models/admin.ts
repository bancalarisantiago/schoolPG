import mongoose from "mongoose";
import { IAdmin } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaAdmin = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "Admin"
    },
  })
  
const AdminModel = mongoose.model<IAdmin>("Admin", schemaAdmin)

export default AdminModel;
  