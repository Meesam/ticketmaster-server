export interface ISubTicket{
    _id:string
    title:string
    startDate:string
    endDate:string
    status:string
    tags:[string]
    ticketType:string
    priority:string
    ticketOwener:string
    ticketMembers:[string]
    currentOwner:string
    dateOfEntry:string
    lastUpdated:string
}