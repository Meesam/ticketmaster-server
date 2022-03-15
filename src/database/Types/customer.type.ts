export interface ICustomer {
  _id: string
  name: string
  website?: [string]
  contactPerson?: string
  email: [string]
  mobile: [string]
  avatar: string
  projects: [string]
  address: string
  status: string /* ex. Active, InActive, New,  */
  dateOfEntry?: Date
  lastUpdated?: Date
}
