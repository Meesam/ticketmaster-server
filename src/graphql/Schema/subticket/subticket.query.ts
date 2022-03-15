import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { SubTicketModel } from "../../../database/Models"
import { ISubTicket } from "../../../database/Types"
import { SubTicketType } from "../../TypeDefs/SubTicketType"

export const GET_SUB_TICKETS = {
  type: new GraphQLList(SubTicketType),
  async resolve(): Promise<ISubTicket[] | null> {
    let data = await SubTicketModel.find()
    return data
  }
}


export const GET_SUB_TICKET_BY_ID = {
  type: SubTicketType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISubTicket }
  ): Promise<ISubTicket | null> {
    let data = await SubTicketModel.findById(args._id)
      .exec()
    return data
  }
}

export const GET_SUB_TICKET_BY_TITLE = {
  type: new GraphQLList(SubTicketType),
  args: {
    title: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISubTicket }
  ): Promise<ISubTicket[] | null> {
    let data = await SubTicketModel.find(args).exec()
    return data
  }
}
