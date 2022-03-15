import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

export const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    status: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    priority: { type: GraphQLString },
    projectType: { type: GraphQLString },
    projectOwener: { type: GraphQLID },
    description:{type:GraphQLString},
    projectMembers: { type: GraphQLList(GraphQLID) },
    ticket: { type: GraphQLList(GraphQLID) },
    sprints:{type: GraphQLList(GraphQLID)},
    dateOfEntry: { type: GraphQLString },
    lastUpdated: { type: GraphQLString }
  })
})
