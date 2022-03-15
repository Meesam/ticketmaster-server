import { GraphQLID, GraphQLString } from "graphql"
import { RolesModel } from "../../../database/Models"
import { IRole } from "../../../database/Types"
import { RoleType } from "../../TypeDefs/RoleType"

export const CREATE_ROLES = {
  type: RoleType,
  args: {
    title: { type: GraphQLString },
    status: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IRole }
  ): Promise<IRole | null> {
    let data = await RolesModel.create(args)
    return data
  }
}

export const UPDATE_ROLE = {
  type: RoleType,
  args: {
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IRole }
  ): Promise<IRole | null> {
    return await RolesModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_ROLE = {
  type: RoleType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IRole }
  ): Promise<IRole | null> {
    return await RolesModel.findOneAndDelete(args)
  }
}
