import  express  from "express";
import  dotenv from 'dotenv';

import {languageHandler} from './middelware/useMiddelware.js'

import {Port} from './variables/constVariable.js'
// Env file file
dotenv.config({ path: "./.env" });
import connectDB from './model/connection.js'
connectDB()
const PORT = process.env.PORT

import authRouter from './router/auth/auther_router.js'

const app= express();

app.use(languageHandler)

app.listen(Port);

/**
 * test router.
*/
app.get("/", (req, res) => {
  console.log("languageHandler",req.validationText.test_message);
    res.send(req.validationText.test_message);
  });

  app.use("/", authRouter);