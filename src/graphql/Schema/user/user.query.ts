import bcrypt from "bcrypt"
import { GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { UserModel } from "../../../database/Models"
import { ILoginResponse, IUser } from "../../../database/Types"
import { LoginResponseType } from "../../TypeDefs/LoginResponse"
import { UserType } from "../../TypeDefs/UserType"
const jwt = require('jsonwebtoken')

export const GET_USERS = {
  type: new GraphQLList(UserType),
  async resolve(): Promise<IUser[] | null> {
    let data = await UserModel.find()
    return data
  }
}

export const USER_LOGIN = {
  type: LoginResponseType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: any }
  ): Promise<ILoginResponse | null> {
    try {      
      let query  = UserModel.where({ email: args?.email });
      let user = await query.find()
      if(!user || user.length === 0){
        return {
          error:{
            fields:[""],
            errorMsg:"Invalid Credential"
          }
        } as ILoginResponse
      }
      const isValidPassword = await bcrypt.compare(args?.password,user[0].password)
      if(!isValidPassword) {
        return {
          error:{
            fields:[""],
            errorMsg:"Invalid Credential"
          }
        } as ILoginResponse
      }
      const token = jwt.sign({
        userId:user[0]._id,
        email: user[0].email[0]
      },"somesupersecretkey",{
        expiresIn:'1h'
      })      
      return {
        id:user[0]._id,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        role: user[0].role,
        email: user[0].email,
        token: token,
        tokenExpireTime: 1,
        customerId: user[0].customerId
      } as ILoginResponse
    } catch (err) {
      throw new Error("Invalid credientail, Try again.")
    }
  }
}

export const GET_USER_BY_ID = {
  type: UserType,
  args: {
    _id: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IUser }
  ): Promise<IUser | null> {
    let data = await UserModel.findById(args._id)
    return data
  }
}

export const GET_USER_BY_NAME = {
  type: new GraphQLList(UserType),
  args: {
    firtName: { type: GraphQLString }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IUser }
  ): Promise<IUser[] | null> {
    let data = await UserModel.find(args).exec()
    return data
  }
}


export const GET_USER_BY_CUSTOMER_ID = {
  type: new GraphQLList(UserType),
  args: {
    customerId: { type: GraphQLID }
  },
  async resolve(
    parent: any,
    args: { [argName: string]: IUser }
  ): Promise<IUser[] | null> {
    let data = await UserModel.find(args).exec()
    return data
  }
}
