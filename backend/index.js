import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projectRouter from './routers/projectRouter.js';

dotenv.config();
const PORT =process.env.PORT ||4000;
const app= express();

app.use(cors());
app.use(express.json());

//base url
app.get("/",(req,res)=>{
    res.send("my portfolio website base url");
});
//routers
app.use("/api",projectRouter);

//mongoose connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("✅ Connected to MongoDB");
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
}).catch((err)=>{
    console.error("❌ MONGO DB CONNECTION ERROR:")
    console.error(err.message);
});    