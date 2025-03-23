
import mongoose from "mongoose";

export const connectDB = (uri: string) => mongoose.connect(uri, {dbName:"graphql"}).then((c) => {
    console.log(`connected with ${c.connection.name}`);
}).catch((error) => console.log(error));

