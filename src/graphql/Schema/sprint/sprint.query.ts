import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { SprintModel } from "../../../database/Models"
import { ISprint } from "../../../database/Types"
import { SprintType } from "../../TypeDefs/SprintType"

export const GET_SPRINTS = {
  type: new GraphQLList(SprintType),
  async resolve(): Promise<ISprint[] | null> {
    let data = await SprintModel.find()
    return data
  }
}


export const GET_SPRINT_BY_ID = {
  type: SprintType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISprint }
  ): Promise<ISprint | null> {
    let data = await SprintModel.findById(args._id)
      .exec()
    return data
  }
}

export const GET_SPRINT_BY_TITLE = {
  type: new GraphQLList(SprintType),
  args: {
    title: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ISprint }
  ): Promise<ISprint[] | null> {
    let data = await SprintModel.find(args).exec()
    return data
  }
}
