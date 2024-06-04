import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(helmet());  // Security middleware
app.use(cors());    // Cross-Origin Resource Sharing middleware
app.use(morgan('dev'));  // HTTP request logger middleware

app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies
app.use(cookieParser());  // Parse Cookie header and populate req.cookies

app.use(router);  // Routes middleware

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
