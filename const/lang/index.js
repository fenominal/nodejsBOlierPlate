import { validation } from "./english/validation.js";

import { Franchvalidation } from "./frnach/validation.js";


/**
 * validation  function for the.
 * @param language as string.
 * @returns app tax and valdiaiotion message  in English or French based on the input parameter.
 * @author Patel Ayush
 */ 
export const language_select = (language) => {
  console.log("language", language);
  if (language === "fr") {
    return {
      appText: "franch_AppText",
      validationText: Franchvalidation,
    };
  } else {
    return {
      appText: "english_AppText",
      validationText: validation,
    };
  }
};
