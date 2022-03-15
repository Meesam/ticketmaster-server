import { GraphQLObjectType, GraphQLSchema } from "graphql"
import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  GET_CUSTOMER,
  GET_CUSTOMER_BY_ID,
  GET_CUSTOMER_BY_NAME,
  UPDATE_CUSTOMER
} from "./customer"
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT, GET_PROJECT_BY_ID, GET_PROJECT_BY_OWNER, GET_PROJECT_BY_TITLE,
  UPDATE_PROJECT
} from "./project"
import {
  CREATE_ROLES,
  DELETE_ROLE,
  GET_ROLES,
  GET_ROLES_BY_ID,
  GET_ROLES_BY_TITLE,
  UPDATE_ROLE
} from "./roles"
import {
  CREATE_SPRINT, DELETE_SPRINT,
  GET_SPRINTS,
  GET_SPRINT_BY_ID,
  GET_SPRINT_BY_TITLE, UPDATE_SPRINT
} from "./sprint"
import {
  CREATE_SUB_TICKET, DELETE_SUB_TICKET, GET_SUB_TICKETS, GET_SUB_TICKET_BY_ID, GET_SUB_TICKET_BY_TITLE, UPDATE_SUB_TICKET
} from "./subticket"
import { CREATE_TICKET, DELETE_TICKET, GET_TICKETS, GET_TICKET_BY_ID, GET_TICKET_BY_TITLE, UPDATE_TICKET } from "./ticket"
import {
  CREATE_USER, DELETE_USER, GET_USERS, GET_USER_BY_CUSTOMER_ID, GET_USER_BY_ID,
  GET_USER_BY_NAME, UPDATE_USER, USER_LOGIN
} from "./user"





const RootQuery = new GraphQLObjectType({
  name: "root",
  fields: {
    getRoles: GET_ROLES,
    getRolesById: GET_ROLES_BY_ID,
    getRoleByTitle: GET_ROLES_BY_TITLE,
    getCustomers: GET_CUSTOMER,
    getCustomerById: GET_CUSTOMER_BY_ID,
    getCustomerByName: GET_CUSTOMER_BY_NAME,
    getProject: GET_PROJECT,
    getProjectById: GET_PROJECT_BY_ID,
    getProjectByTitle: GET_PROJECT_BY_TITLE,
    getUsers:GET_USERS,
    getUserById:GET_USER_BY_ID,
    getUserByName:GET_USER_BY_NAME,
    loginUser:USER_LOGIN,
    getSprints:GET_SPRINTS,
    getSprintById:GET_SPRINT_BY_ID,
    getSprintByTitle:GET_SPRINT_BY_TITLE,
    getTickets:GET_TICKETS,
    getTicketById:GET_TICKET_BY_ID,
    getTicketByTitle:GET_TICKET_BY_TITLE,
    getSubTickets:GET_SUB_TICKETS,
    getSubTicketById:GET_SUB_TICKET_BY_ID,
    getSubTicketByTitle:GET_SUB_TICKET_BY_TITLE,
    getProjectsByOwner:GET_PROJECT_BY_OWNER,
    getUsersByCustomerId:GET_USER_BY_CUSTOMER_ID
  }
})

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createRoles: CREATE_ROLES,
    updateRole: UPDATE_ROLE,
    deleteRole: DELETE_ROLE,
    createCustomer: CREATE_CUSTOMER,
    updateCustomer: UPDATE_CUSTOMER,
    deleteCustomer: DELETE_CUSTOMER,
    createProject: CREATE_PROJECT,
    updateProject: UPDATE_PROJECT,
    deleteProject: DELETE_PROJECT,
    createUser: CREATE_USER,
    updateUser: UPDATE_USER,
    deleteUser: DELETE_USER,
    createSprint:CREATE_SPRINT,
    updateSprint:UPDATE_SPRINT,
    deleteSprint:DELETE_SPRINT,
    createTicket:CREATE_TICKET,
    updateTicket:UPDATE_TICKET,
    deleteTicket:DELETE_TICKET,
    createSubTicket:CREATE_SUB_TICKET,
    updateSubTicket:UPDATE_SUB_TICKET,
    deleteSubTicket:DELETE_SUB_TICKET
  }
})

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
export { graphqlSchema }

