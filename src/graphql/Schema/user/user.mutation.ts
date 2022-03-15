import bcrypt from "bcrypt"
import crypto from "crypto"
import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { UserModel } from "../../../database/Models"
import { IUser } from "../../../database/Types"
import { sendEail } from "../../../utils/mailerUtil"
import { UserType } from "../../TypeDefs/UserType"
const saltRounds = 10
const generatePassword = (
  length = 8,
  wishlist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"
): string =>
  Array.from(crypto.randomFillSync(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join("")

const incriptedPassword = async (): Promise<string> => {
  let password = generatePassword()
  console.log('password', password);
  let response = await bcrypt.hash(password, saltRounds)
  return response
}

export const CREATE_USER = {
  type: UserType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLList(GraphQLString) },
    password: { type: GraphQLString },
    mobile: { type: GraphQLList(GraphQLString) },
    avatar: { type: GraphQLString },
    role: { type: GraphQLString },
    dob: { type: GraphQLString },
    status: { type: GraphQLString },
    customerId:{ type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IUser }
  ): Promise<IUser | null> {
    let data = await UserModel.create({
      ...args,
      password: await incriptedPassword()
    })
    if(data){
      let {email} = args
      let password = generatePassword()
      console.log('email',email);
      sendEail("meesam.engineer@gmail.com",password)
    }
    return data
  }
}

export const UPDATE_USER = {
  type: UserType,
  args: {
    _id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLList(GraphQLString) },
    mobile: { type: GraphQLList(GraphQLString) },
    avatar: { type: GraphQLString },
    role: { type: GraphQLString },
    dob: { type: GraphQLString },
    status: { type: GraphQLString },
    customerId:{ type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IUser }
  ): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(args._id, args, { new: true })
  }
}

export const DELETE_USER = {
  type: UserType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IUser }
  ): Promise<IUser | null> {
    return await UserModel.findOneAndDelete(args)
  }
}
