import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { swaggerDocs, swaggerUi } from './swagger.js';
import router from './routes/route.js';
import connectDB from './db/connectDB.js';

dotenv.config();

const app = express()
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', router)

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT, ()=>{
    console.log("server running on port " + PORT)
})
