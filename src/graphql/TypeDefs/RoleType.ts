import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql"

export const RoleType = new GraphQLObjectType({
  name: "roles",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    dateOfEntry: { type: GraphQLString },
    lastUpdated: { type: GraphQLString }
  })
})
