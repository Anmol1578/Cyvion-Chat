import express from "express"
import "dotenv/config"
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js"

const app = express();
const PORT = process.env.PORT


app.get("/home", (req,res) =>{
    res.status(200).json({ok:true});
})



app.listen(PORT,()=> {
    connectDB();
   console.log("Server in up and running on port:", PORT)
}
)