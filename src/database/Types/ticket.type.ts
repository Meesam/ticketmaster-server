export interface ITicket{
    _id:string
    title:string
    startDate:string
    endDate:string
    status:string
    tags:[string]
    ticketType:string
    subTicket:[string]
    priority:string
    project:string
    ticketOwener:string
    ticketMembers:[string]
    currentOwner:string
    dateOfEntry:string
    lastUpdated:string
}