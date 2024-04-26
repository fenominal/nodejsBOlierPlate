import  express  from "express";

import {signup,signIn} from '../../controller/auth/auth_controller.js';
import {uploadFile} from '../../helper/supportFiles.js'

const router = express.Router();

// router.post("/signIn",uploadFile,signIn);
router.post("/signIn",signIn);
router.post("/signUp",signup);


export default router;