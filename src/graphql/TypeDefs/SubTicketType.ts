import {
   GraphQLID,
   GraphQLList,
   GraphQLObjectType,
   GraphQLString
} from "graphql"

export const SubTicketType = new GraphQLObjectType({
  name: "SubTicket",
  fields: () => ({
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
    currentOwner: { type: GraphQLID },
    dateOfEntry: { type: GraphQLString },
    lastUpdated: { type: GraphQLString }
  })
})
