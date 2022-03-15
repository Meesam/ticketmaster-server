import { Schema } from "mongoose"
import { IUser } from "../Types"

const UserSchema = new Schema<IUser>({
  firstName: {type:String, required:true},
  lastName: String,
  email:[String],
  password:String,
  mobile:[String],
  dob:{
    type: Date,
    default: new Date(),
  },
  avatar:String,
  role:String,
  projects:[{ type: Schema.Types.ObjectId, ref: 'Project' }],
  customerId:{ type: Schema.Types.ObjectId, ref: 'Customer' },
  status:String,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});


export default UserSchema;