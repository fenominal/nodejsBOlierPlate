import {language_select} from '../const/lang/index.js'

/**
 * langaue checker.
 * @description check header or body for languae variable and send to language_select function . 
 * @returns  {string} - return selected language.
 * @author Patel Ayush.
 */ 
export function languageHandler(req, res, next) {
  let language = req?.headers?.language || req?.body?.language || "english";
  const { validationText, appText } = language_select(language);
  req.validationText = validationText;
  req.appText = appText;
  return next();
}
