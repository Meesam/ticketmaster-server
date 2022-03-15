import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { ProjectModel } from "../../../database/Models"
import { IProject, IProjectResponse } from "../../../database/Types"
import { ProjectResponseType } from "../../TypeDefs/ProjectResponseType"
import { ProjectType } from "../../TypeDefs/ProjectType"

export const GET_PROJECT = {
  type: new GraphQLList(ProjectType),
  async resolve(): Promise<IProject[] | null> {
    let data = await ProjectModel.find()
    return data
  }
}


export const GET_PROJECT_BY_ID = {
  type: ProjectResponseType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IProject }
  ): Promise<IProjectResponse | null> {
    let data = await ProjectModel.findById(args._id)
      .populate("projectMembers")
      .populate("projectOwener")
      .exec()
    return data
  }
}

export const GET_PROJECT_BY_TITLE = {
  type: new GraphQLList(ProjectType),
  args: {
    title: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IProject }
  ): Promise<IProject[] | null> {
    let data = await ProjectModel.find(args).exec()
    return data
  }
}

export const GET_PROJECT_BY_OWNER = {
  type: new GraphQLList(ProjectResponseType),
  args: {
    projectOwener: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IProject }
  ): Promise<IProjectResponse[] | null> {
    let query = ProjectModel.where({projectOwener:args.projectOwener})
    let ownerProjects = await query.find()
    return ownerProjects
  }
}
