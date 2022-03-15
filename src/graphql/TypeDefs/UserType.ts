import {
  GraphQLID, GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLList(GraphQLString) },
    password:{ type: GraphQLString },
    mobile: { type: GraphQLList(GraphQLString) },
    avatar: { type: GraphQLString },
    role: { type: GraphQLString },
    projects: { type: GraphQLList(GraphQLID) },
    customerId:{ type: GraphQLID },
    dob: { type: GraphQLString },
    status: { type: GraphQLString },
    dateOfEntry: { type: GraphQLString },
    lastUpdated: { type: GraphQLString },
  })
})
