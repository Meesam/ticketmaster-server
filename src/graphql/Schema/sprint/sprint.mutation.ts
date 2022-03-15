import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { SprintModel } from "../../../database/Models"
import { ISprint } from "../../../database/Types"
import { SprintType } from "../../TypeDefs/SprintType"

export const CREATE_SPRINT = {
  type: SprintType,
  args: {
      title: { type: GraphQLString },
      startDate: { type: GraphQLString },
      endDate: { type: GraphQLString },
      status: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISprint }
  ): Promise<ISprint | null> {
    let data = await SprintModel.create(args)
    return data
  }
}

export const UPDATE_SPRINT = {
  type: SprintType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    status: { type: GraphQLString },
    members: { type: GraphQLList(GraphQLID) },
    tickets: { type: GraphQLList(GraphQLID) },
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISprint }
  ): Promise<ISprint | null> {
    return await SprintModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_SPRINT = {
  type: SprintType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISprint }
  ): Promise<ISprint | null> {
    return await SprintModel.findOneAndDelete(args)
  }
}
