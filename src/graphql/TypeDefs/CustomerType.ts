import {
   GraphQLID,
   GraphQLList,
   GraphQLObjectType,
   GraphQLString
} from "graphql"

export const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLList(GraphQLString) },
    contactPerson: { type: GraphQLString },
    email: { type: GraphQLList(GraphQLString) },
    mobile: { type: GraphQLList(GraphQLString) },
    avatar: { type: GraphQLString },
    projects: { type: GraphQLList(GraphQLID) },
    address: { type: GraphQLString },
    status: { type: GraphQLString },
    dateOfEntry: { type: GraphQLString },
    lastUpdated: { type: GraphQLString }
  })
})
