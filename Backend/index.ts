import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {env} from './utils/myVariables'
import {useRoute} from './routes/appRoute'
import cookieParser from 'cookie-parser'
const app = express() 

const MONGODB = env.MONGODB;
const CLIENT_HOST = env.CLIENT_HOST;
 const corsOptions = {
    origin: CLIENT_HOST,
    credentials: true,
 }

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://luongminh:luongminh99@cluster0.wx8mw25.mongodb.net/Fresh-Garden?retryWrites=true&w=majority");
        console.log("Kết nối database thành công");
    } catch (error) {
        console.log("Kết nối database thất bại");
    }
}
connectDB();


useRoute(app);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

