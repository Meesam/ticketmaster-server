import { Schema } from "mongoose"
import { IProject } from "../Types"

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  status: String /* ex. Active, Closed, InActive, New, onHold  */,
  tags: [String],
  priority: String,
  projectType: String,
  projectOwener: { type: Schema.Types.ObjectId, ref: "User" },
  projectMembers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  ticket: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  sprints:[{ type: Schema.Types.ObjectId, ref: "Sprint" }],
  description:String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
})

export default ProjectSchema
