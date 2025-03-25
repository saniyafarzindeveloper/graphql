import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import { connectDB } from "./database/database.js";
import { typeDefs } from "./graphql/schema/schema.js";
import { getAllUsers } from "./controllers/user.js";
import { getAllCourses } from "./controllers/course.js";


dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;

const mongoURI = process.env.MONGO_URI?.trim() || "mongodb://localhost:27017";
console.log("Connecting to:", mongoURI);
connectDB(mongoURI);



const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      hello: () => "Hello SANIYA",
      users: getAllUsers,
      courses: getAllCourses,
    },
  },
});


startStandaloneServer(server, {
  listen:{
    port,
  }
}).then(() => {
  console.log(`Server is running on port ${port}`);
}).catch((error) => {
  console.log(error);
})
