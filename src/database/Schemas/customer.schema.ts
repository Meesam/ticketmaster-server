import { Schema } from "mongoose"
import { ICustomer } from "../Types"

const CustomerSchema = new Schema<ICustomer>({
  name: String,
  website: [String],
  contactPerson: String,
  email: [String],
  mobile: [String],
  avatar: String,
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  address: String,
  status: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
})

export default CustomerSchema
