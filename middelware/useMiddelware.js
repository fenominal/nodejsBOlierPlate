import {language_select} from '../const/lang/index.js'

export function languageHandler(req, res, next) {
  let language = req?.headers?.language || req?.body?.language || "english";
  const { validationText, appText } = language_select(language);
  req.validationText = validationText;
  req.appText = appText;
  return next();
}
