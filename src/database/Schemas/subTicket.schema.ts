import { Schema } from "mongoose"
import { ISubTicket } from "../Types"

const SubTicketSchema = new Schema<ISubTicket>({
  title: { type: String, required: true },
  startDate: {
    type: Date,
    default: new Date()
  },
  endDate: {
    type: Date,
    default: new Date()
  },
  tags: [String],
  ticketType: String,
  priority: String,
  status: String,
  ticketOwener: { type: Schema.Types.ObjectId, ref: "User" },
  ticketMembers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  currentOwner: { type: Schema.Types.ObjectId, ref: "User" },
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
})

export default SubTicketSchema
