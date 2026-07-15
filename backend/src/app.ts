import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"


const app=express();

app.use(cors())

app.use((express.json()));
app.use(cookieParser())

app.get("/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Server is ok"
    })
})

export default app;