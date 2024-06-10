import express from 'express';
import cors from "cors"
import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';
configDotenv()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})