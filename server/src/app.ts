import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone';
import connectDB from "./database/database.js";
// import express from "express";
// import helmet from "helmet";
// import { connectGraphQL } from "@/graphql/graphql.js";
// import { expressMiddleware } from "@apollo/server/express4";
// import cors from "cors";
// import { errorMiddleware } from "@/middlewares/error.js";
// import morgan from "morgan";

// import { connectDB } from "@/lib/db.js";

dotenv.config({ path: "./.env" });

// export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
// const port = process.env.PORT || 3000;

// const mongoURI = process.env.MONGO_URI! || "mongodb://localhost:27017";

// connectDB(mongoURI);

// const app = express();

// const graphqlServer = connectGraphQL();
// await graphqlServer.start();

// app.use(
//   helmet({
//     contentSecurityPolicy: envMode !== "DEVELOPMENT",
//     crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
//   })
// );

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongoURI = process.env.MONGO_URI;
connectDB(mongoURI);
const server = new ApolloServer({
  typeDefs: ` type Query{hello: String}`,
  resolvers:{
    Query:{
      hello:() => "Hello SANIYA"
    }
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

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/graphql", expressMiddleware(graphqlServer));
// app.use(cors({ origin: " * ", credentials: true }));
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// your routes here

// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });

// app.use(errorMiddleware);

// app.listen(port, () =>
//   console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
// );
