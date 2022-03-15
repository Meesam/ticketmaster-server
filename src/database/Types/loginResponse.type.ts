import { IError } from "./error.types"

export interface ILoginResponse {
    id:string
    firstName: string
    lastName: string
    email:[string]
    role:string
    token:string,
    tokenExpireTime:number,
    error?:IError,
    customerId:string
  }
  
  
  
  
  