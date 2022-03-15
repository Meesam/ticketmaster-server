import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { TicketModel } from "../../../database/Models"
import { ITicket } from "../../../database/Types"
import { TicketType } from "../../TypeDefs/TicketType"

export const CREATE_TICKET = {
  type: TicketType,
  args: {
    title: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    status: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    ticketType: { type: GraphQLString },
    priority: { type: GraphQLString },
    project: { type: GraphQLID },
    ticketOwener: { type: GraphQLID },
    ticketMembers: { type: GraphQLList(GraphQLID) },
    currentOwner: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ITicket }
  ): Promise<ITicket | null> {
    let data = await TicketModel.create(args)
    return data
  }
}

export const UPDATE_TICKET = {
  type: TicketType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    status: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    ticketType: { type: GraphQLString },
    subTicket: { type: GraphQLList(GraphQLID) },
    priority: { type: GraphQLString },
    project: { type: GraphQLID },
    ticketOwener: { type: GraphQLID },
    ticketMembers: { type: GraphQLList(GraphQLID) },
    currentOwner: { type: GraphQLID },
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ITicket }
  ): Promise<ITicket | null> {
    return await TicketModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_TICKET = {
  type: TicketType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ITicket }
  ): Promise<ITicket | null> {
    return await TicketModel.findOneAndDelete(args)
  }
}
