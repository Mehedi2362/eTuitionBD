import 'dotenv/config'
import { Server } from "./config/server.js";
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from "compression";
import { getEnv } from "./shared/utils/getEnv.js";
import cookieParser from "cookie-parser";
const app = express()

//Security Middleware
app.use(helmet())
app.use(compression())

//CORS Configuration
app.use(cors({
    origin: getEnv.string('CLIENT_URL', 'http://localhost:3000'),
    credentials: true,
}))

//Request Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Cookie Parser
app.use(cookieParser())



await Server.start(app)
