import * as Mongoose from "mongoose"
import {
  CustomerSchema,
  ProjectSchema,
  RoleSchema, SprintSchema, SubTicketSchema,
  TicketSchema,
  UserSchema
} from "../Schemas"
import {
  ICustomer,
  IProject,
  IRole, ISprint, ISubTicket,
  ITicket,
  IUser
} from "../Types"

export const UserModel = Mongoose.model<IUser>("User", UserSchema)
export const RolesModel = Mongoose.model<IRole>("Role", RoleSchema)
export const ProjectModel = Mongoose.model<IProject>("Project", ProjectSchema)
export const CustomerModel = Mongoose.model<ICustomer>(
  "Customer",
  CustomerSchema
)

export const SprintModel = Mongoose.model<ISprint>("Sprint", SprintSchema)
export const TicketModel = Mongoose.model<ITicket>("Ticket", TicketSchema)
export const SubTicketModel = Mongoose.model<ISubTicket>(
  "SubTicket",
  SubTicketSchema
)
