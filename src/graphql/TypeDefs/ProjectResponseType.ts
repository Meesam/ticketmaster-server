import {
  GraphQLID, GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from "graphql"
import { UserType } from "./UserType"

  export const ProjectResponseType = new GraphQLObjectType({
    name: "ProjectResponseType",
    fields: () => ({
      _id: { type: GraphQLID },
      title: { type: GraphQLString },
      startDate: { type: GraphQLString },
      endDate: { type: GraphQLString },
      status: { type: GraphQLString },
      tags: { type: GraphQLList(GraphQLString) },
      priority: { type: GraphQLString },
      projectType: { type: GraphQLString },
      projectOwener: { type: UserType },
      projectMembers: { type: GraphQLList(UserType) },
      ticket: { type: GraphQLList(GraphQLID) },
      description:{type:GraphQLString},
      sprints:{type: GraphQLList(GraphQLID)},
      dateOfEntry: { type: GraphQLString },
      lastUpdated: { type: GraphQLString }
    })
  })
  