import  express  from "express";

import {signup,signIn} from '../../controller/auth/auth_controller.js';

const router = express.Router();

router.get("/signUp",signup);


export default router;