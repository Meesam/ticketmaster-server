export interface ISprint{
    _id:string
    title:string
    startDate:string
    endDate:string
    status:string
    tickets:[string]
    members:[string]
    dateOfEntry?: Date
    lastUpdated?: Date
}