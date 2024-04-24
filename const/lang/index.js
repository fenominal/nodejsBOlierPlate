import {validation} from './english/validation.js'

import {Franchvalidation} from './frnach/validation.js'

export const language_select = (language )=>{

    console.log("language",language);
    if (language === 'fr') {
        return{
            appText: "franch_AppText",
            validationText: Franchvalidation,
        }
    }

    if (language ==='en') {
        
        return{
            appText: "english_AppText",
            validationText: validation,
        }
    }

}