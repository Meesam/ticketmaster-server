import { Schema } from "mongoose"
import { ITicket } from "../Types"

const TicketSchema = new Schema<ITicket>({
  title: {type:String, required:true},
  startDate:{
    type: Date,
    default: new Date(),
  },
  endDate:{
    type: Date,
    default: new Date(),
  },
  tags:[String],
  ticketType:String,
  project:String,
  subTicket:[{ type: Schema.Types.ObjectId, ref: 'SubTicket' }],
  priority:String,
  status:String,
  ticketOwener:{ type: Schema.Types.ObjectId, ref: 'User' },
  ticketMembers:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  currentOwner:{ type: Schema.Types.ObjectId, ref: 'User' },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});


export default TicketSchema;