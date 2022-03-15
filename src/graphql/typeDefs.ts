import { gql } from "apollo-server"


export const typeDefs = gql`
  scalar Date
  type User {
    _id:String
    firstName:String
    lastName:String
    age:Int  
  }

  type Role {
    _id:String
    title:String
    status:String
  }

  type Project {
    _id:String
    title:String
    startDate:Date
    endDate:Date
    status:String
    customer:String
  }

  type Query {
    getUsers: [User]
    getRoles:[Role]
    getProject:[Project]
  }

  type Mutation {
     addUser(firstName:String, lastName :String,age:Int):User
  }
`;