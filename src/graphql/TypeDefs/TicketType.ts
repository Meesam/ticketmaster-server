import {
   GraphQLID,
   GraphQLList,
   GraphQLObjectType,
   GraphQLString
} from "graphql"

export const TicketType = new GraphQLObjectType({
  name: "Ticket",
  fields: () => ({
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
    dateOfEntry: { type: GraphQLString },
    lastUpdated: { type: GraphQLString }
  })
})
