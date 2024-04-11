import express from "express";
import router from "./src/Routes/routers.js";
import dotenv from "dotenv";

dotenv.config()

//initializing server
const app=express();

const PORT = process.env.PORT
const HOST = process.env.HOST

console.log(PORT)
//middlewares
app.use(express.json());


//router
app.use("/",router);

//listening to the server
app.listen(PORT, HOST,()=>{
    console.log("server started in")
});
