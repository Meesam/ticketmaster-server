import Mongoose from "mongoose"

let database: Mongoose.Connection;
export const connect = () => {
  const uri = "mongodb+srv://meesam:M2e2s1a1@123123@cluster0.ntkae.mongodb.net/ticketmaster?retryWrites=true&w=majority";
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};