import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { CustomerModel } from "../../../database/Models"
import { ICustomer } from "../../../database/Types"
import { CustomerType } from "../../TypeDefs/CustomerType"

export const CREATE_CUSTOMER = {
  type: CustomerType,
  args: {
    name: { type: GraphQLString },
    website: { type: GraphQLList(GraphQLString) },
    contactPerson: { type: GraphQLString },
    email: { type: GraphQLList(GraphQLString) },
    mobile: { type: GraphQLList(GraphQLString) },
    avatar: { type: GraphQLString },
    address: { type: GraphQLString },
    status: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ICustomer }
  ): Promise<ICustomer | null> {
    let data = await CustomerModel.create(args)
    return data
  }
}

export const UPDATE_CUSTOMER = {
  type: CustomerType,
  args: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    website: { type: GraphQLList(GraphQLString) },
    contactPerson: { type: GraphQLString },
    email: { type: GraphQLList(GraphQLString) },
    mobile: { type: GraphQLList(GraphQLString) },
    avatar: { type: GraphQLString },
    address: { type: GraphQLString },
    status: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ICustomer }
  ): Promise<ICustomer | null> {
    return await CustomerModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_CUSTOMER = {
  type: CustomerType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ICustomer }
  ): Promise<ICustomer | null> {
    return await CustomerModel.findOneAndDelete(args)
  }
}
