import  express  from "express";
import  dotenv from 'dotenv';
// Env file file
dotenv.config({ path: "./.env" });
import connectDB from './model/connection.js'
connectDB()
const PORT = process.env.PORT

import authRouter from './router/auth/auther_router.js'

const app= express();

app.listen(PORT);

/**
 * test router.
*/
app.get("/", (req, res) => {
    res.send("Hii!");
  });

  app.use("/", authRouter);