import {statusCodes} from '../const/statusCode.js';

/**
 * success handler .
 * @param res as response.
 * @param data to send in the body of the response.
 * @param message as string messsagfe.
 * @author Patel Ayush
*/
export const successHandler = (res, message = "", data = null)=>{
    res.status(statusCodes.ok).json({
        status: statusCodes.ok,
        success: true,
        message: message,
        ...(data ? { data: data } : {}),
    });
}



/**
 * fail handler .
 * @param res as response.
 * @param error as string messsagfe.
 * @author Patel Ayush
*/
export const failed = (res, error = null) => {
    if(!error || error==""){
      sessionExpired()
    }else{
      res.status(statusCodes.forbidden).json({
        status: statusCodes.forbidden,
        success: false,
        Notification: [error],
      });
    }
  
  };