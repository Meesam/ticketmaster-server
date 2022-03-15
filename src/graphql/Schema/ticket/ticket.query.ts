import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { TicketModel } from "../../../database/Models"
import { ITicket } from "../../../database/Types"
import { TicketType } from "../../TypeDefs/TicketType"

export const GET_TICKETS = {
  type: new GraphQLList(TicketType),
  async resolve(): Promise<ITicket[] | null> {
    let data = await TicketModel.find()
    return data
  }
}


export const GET_TICKET_BY_ID = {
  type: TicketType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ITicket }
  ): Promise<ITicket | null> {
    let data = await TicketModel.findById(args._id)
      .exec()
    return data
  }
}

export const GET_TICKET_BY_TITLE = {
  type: new GraphQLList(TicketType),
  args: {
    title: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ITicket }
  ): Promise<ITicket[] | null> {
    let data = await TicketModel.find(args).exec()
    return data
  }
}
