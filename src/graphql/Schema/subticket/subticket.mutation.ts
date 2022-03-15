import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { SubTicketModel } from "../../../database/Models"
import { ISubTicket } from "../../../database/Types"
import { SubTicketType } from "../../TypeDefs/SubTicketType"

export const CREATE_SUB_TICKET = {
  type: SubTicketType,
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
    args: { [argName: string]: ISubTicket }
  ): Promise<ISubTicket | null> {
    let data = await SubTicketModel.create(args)
    return data
  }
}

export const UPDATE_SUB_TICKET = {
  type: SubTicketType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    status: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    ticketType: { type: GraphQLString },
    priority: { type: GraphQLString },
    ticketOwener: { type: GraphQLID },
    ticketMembers: { type: GraphQLList(GraphQLID) },
    currentOwner: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISubTicket }
  ): Promise<ISubTicket | null> {
    return await SubTicketModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_SUB_TICKET = {
  type: SubTicketType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISubTicket }
  ): Promise<ISubTicket | null> {
    return await SubTicketModel.findOneAndDelete(args)
  }
}
