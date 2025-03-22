
import mongoose from "mongoose";

const connectDB = (uri: string) => mongoose.connect(uri, {dbName:"grapql"}).then((c) => {
    console.log(`connected with ${c.connection.name}`);
}).catch((error) => console.log(error));

export default connectDB;