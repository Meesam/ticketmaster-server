import {
  GraphQLID, GraphQLInt, GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from "graphql"
import { ErrorType } from "./ErrorType"


export const LoginResponseType = new GraphQLObjectType({
    name: "LoginResponseTypes",
    fields: () => ({
      id: { type: GraphQLID },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLList(GraphQLString) },
      role :{type: GraphQLString},
      token:{ type: GraphQLString },
      tokenExpireTime:{type:GraphQLInt},
      error: {type:ErrorType},
      customerId:{ type: GraphQLID }
    })
  })