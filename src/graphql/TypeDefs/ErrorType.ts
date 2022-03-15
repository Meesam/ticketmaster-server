import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql"

export const ErrorType = new GraphQLObjectType({
    name: "ErrorType",
    fields: () => ({
      fields: { type: GraphQLList(GraphQLString) },
      errorMsg: { type: GraphQLString }
    })
  })