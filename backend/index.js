import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//initialization of environment 
dotenv.config();

const PORT =process.env.PORT ||4000;
const app= express();

//middleware
app.use(cors());
app.use(express.json());

//base url
app.get("/",(req,res)=>{
    res.send("my portfolio website base url");
});

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