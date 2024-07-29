import express, { Request, Response } from 'express';
import {connect } from './connections/MongoDB.connection'
import { port } from './config/Config';
import authRouter from './routes/auth.routes';

const app = express();

//middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}));

//connect
connect();


//routes
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log("http://localhost:", port);
});