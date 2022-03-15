import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql"
  
  export const SprintType = new GraphQLObjectType({
    name: "Sprint",
    fields: () => ({
      _id: { type: GraphQLID },
      title: { type: GraphQLString },
      startDate: { type: GraphQLString },
      endDate: { type: GraphQLString },
      status: { type: GraphQLString },
      members: { type: GraphQLList(GraphQLID) },
      tickets: { type: GraphQLList(GraphQLID) },
      dateOfEntry: { type: GraphQLString },
      lastUpdated: { type: GraphQLString }
    })
  })
  