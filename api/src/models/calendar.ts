import mongoose from "mongoose";
import { ICalendar } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaCalendar = new Schema({
      
    
     
  })
  
const Calendar = mongoose.model<ICalendar>("Calendar", schemaCalendar)
  
export default Calendar;