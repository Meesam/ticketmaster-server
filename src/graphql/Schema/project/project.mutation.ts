import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { ProjectModel } from "../../../database/Models"
import { IProject } from "../../../database/Types"
import { ProjectType } from "../../TypeDefs/ProjectType"

export const CREATE_PROJECT = {
  type: ProjectType,
  args: {
    title: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    priority: { type: GraphQLString },
    projectType: { type: GraphQLString },
    description:{type: GraphQLString},
    projectOwener: { type: GraphQLID },
    status: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IProject }
  ): Promise<IProject | null> {
    let data = await ProjectModel.create(args)
    return data
  }
}

export const UPDATE_PROJECT = {
  type: ProjectType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    startDate: { type: GraphQLString},
    endDate: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    priority: { type: GraphQLString },
    projectType: { type: GraphQLString },
    projectOwener: { type: GraphQLID },
    description:{type: GraphQLString},
    status: { type: GraphQLString },
    projectMembers: { type: GraphQLList(GraphQLID) },
    ticket: { type: GraphQLList(GraphQLID) },
    sprints:{type: GraphQLList(GraphQLID)},
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IProject }
  ): Promise<IProject | null> {
    return await ProjectModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_PROJECT = {
  type: ProjectType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IProject }
  ): Promise<IProject | null> {
    return await ProjectModel.findOneAndDelete(args)
  }
}
