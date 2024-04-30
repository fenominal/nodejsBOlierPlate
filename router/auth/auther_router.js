import  express  from "express";

import {signup,signIn,upload_file} from '../../controller/auth/auth_controller.js';
import {uploadFile} from '../../helper/supportFiles.js';

const router = express.Router();

router.post("/signIn",uploadFile,signIn);
// router.post("/signIn",signIn);
router.post("/signUp",signup);
router.post("/upload",upload_file)


export default router;