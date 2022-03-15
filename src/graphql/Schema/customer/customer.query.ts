import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { CustomerModel } from "../../../database/Models"
import { ICustomer } from "../../../database/Types"
import { CustomerType } from "../../TypeDefs/CustomerType"

export const GET_CUSTOMER = {
  type: new GraphQLList(CustomerType),
  async resolve(): Promise<ICustomer[] | null> {
    let data = await CustomerModel.find()
    return data
  }
}

export const GET_CUSTOMER_BY_ID = {
  type: CustomerType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ICustomer }
  ): Promise<ICustomer | null> {
    let data = await CustomerModel.findById(args._id)
    return data
  }
}

export const GET_CUSTOMER_BY_NAME = {
  type: new GraphQLList(CustomerType),
  args: {
    name: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: ICustomer }
  ): Promise<ICustomer[] | null> {
    let data = await CustomerModel.find(args).exec()
    return data
  }
}
