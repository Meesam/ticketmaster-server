import { ProjectModel, RolesModel, UserModel } from "../database/Models"
import { IUser } from "../database/Types/users.types"
import { dateScalar } from "./dateScalar"


const getUsers = async () => {
  const users = await UserModel.find()
  return users
}

const getRoles = async () => {
  const users = await RolesModel.find()
  return users
}

const getProject = async () => {
  const users = await ProjectModel.find()
  return users
}

const addUser = async (_ :any,payload:IUser) => {
  let userInput = {...payload}
  const users = await UserModel.save(userInput)
  return users
}

export const resolvers:any = {
    Date: dateScalar,
    Query: {
      getUsers: () => getUsers(),
      getRoles:() => getRoles(),
      getProject:() => getProject()
    },
    Mutation:{
      addUser:()=>addUser(_,{...payload})
    }
  };