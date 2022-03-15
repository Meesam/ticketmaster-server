import { Schema } from 'mongoose'
import { IRole } from '../Types'

const RoleSchema = new Schema<IRole>({
    title:String,
    status:String,
    dateOfEntry: {
      type: Date,
      default: new Date(),
    },
    lastUpdated: {
      type: Date,
      default: new Date(),
    },
})

export default RoleSchema