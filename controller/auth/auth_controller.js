import * as UserModel from "../../model/auth.model/auth.model.js";
import * as validtion from "../../helper/vadlidation.js";
import * as resHandler from "../../helper/responseHandler.js";



/**
 * Controller Function for Signup.
 * @author Patel Ayush
 * @param (request and response)
 */
export const signup = async (req, res) => {
  try {
    const { validationText = {}, body = {} } = req;

    const { fullname, confirm_password } = body;

    const { fullname_require, email_require } = validationText;

    console.log("hhhh");

    let require_fields = {
      ...validtion.isRequired(fullname, "fullname", fullname_require),
    };

    if (!validtion.isEmptyObj(require_fields)) {
      return resHandler.failed(res, require_fields);
    }

    resHandler.successHandler(res, true, "require_fields");
  } catch (error) {
    resHandler.failed(res, "Internal Server Error");
    console.log(error);
  }
};

/**
 * Controller Function for Signup.
 * @author Patel Ayush
 * @param (request and response)
 */
export const signIn = async (req, res) => {
  try {
    resHandler.successHandler(res, "file upload",'');
  } catch (error) {
    resHandler.failed(res, "Internal Server Error");
    console.log(error);
  }
};

/**
 * Controller Function for upload file.
 * @author Patel Ayush
 * @param (request and response)
 */
export const upload_file =async (req, res)=>{
  try {
    resHandler.successHandler(res, true, "");    
  } catch (error) {
    resHandler.failed(res, "Internal Server Error");
    console.log(error); 
  }

}