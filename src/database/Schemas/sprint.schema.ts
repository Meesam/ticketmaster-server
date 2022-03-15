import { Schema } from "mongoose"
import { ISprint } from "../Types"

const SprintSchema = new Schema<ISprint>({
  title: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  status: String /* ex. Active, Closed, InActive, New, onHold  */,
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
})

export default SprintSchema
