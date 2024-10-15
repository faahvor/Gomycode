import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./db/conn"

dotenv.config()

await dbConnection()
const app = express()
const port = "3000"


app.listen(port,()=>{
    console.log(`server is running on https://localhost:${port}`);
})