import cors from 'cors'
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { connect } from "./database"
import { graphqlSchema } from "./graphql/Schema"
const bodyParser = require('body-parser')
const compression = require('compression')

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express()
app.use(compression())

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}));
app.use(cors(options));
app.use(express.json());

connect()


app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
  })
)

const port = 4000
app.listen(port, () => {
  console.log(`🚀  Server ready at localhost ${port}`)
})


