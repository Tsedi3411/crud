import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/userRoute.js'
import cors from 'cors';

const app = express();
app.use(bodyparser.json());
app.use(cors());
dotenv.config();


const PORT= process.env.PORT || 7000;
const MONGOURL=process.env.MONGO_URL;


mongoose
     .connect(MONGOURL)
     .then(()=>{
        console.log('Db is connected succesfully')
        app.listen(PORT, ()=>{
            console.log(`Server is runing on port:${PORT}`)
        });

     })
     .catch((error)=>{
        console.log(error)
     })

app.use("/api",route)

 