import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { RolesModel } from "../../../database/Models"
import { IRole } from "../../../database/Types/roles.types"
import { RoleType } from "../../TypeDefs/RoleType"

export const GET_ROLES = {
  type: new GraphQLList(RoleType),
  async resolve(): Promise<IRole[] | null> {
    let data = await RolesModel.find()
    return data
  }
}

export const GET_ROLES_BY_ID = {
  type: RoleType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IRole }
  ): Promise<IRole | null> {
    let data = await RolesModel.findById(args._id)
    return data
  }
}

export const GET_ROLES_BY_TITLE = {
  type: new GraphQLList(RoleType),
  args: {
    title: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IRole }
  ): Promise<IRole[] | null> {
    let data = await RolesModel.find(args).exec()
    return data
  }
}
