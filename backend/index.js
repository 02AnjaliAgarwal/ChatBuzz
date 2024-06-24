import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.routes.js";
 
const app = express();

const PORT =process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); // to parse icm req with JSON payloads
app.use(cookieParser());  //middleware
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/", (req,res)=> {
//     //root route http://localhost:5000/
//     res.send("Hi there !!")
// });



app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server listening at port: ${PORT}`);
});