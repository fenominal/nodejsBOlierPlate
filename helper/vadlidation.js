
/**
 * check single value it is empty or not.
 * @param  data .
 * @description true for empty false for not empty.
 * @returns true or false.
 */
export const isEmpty = (data) => {
    try {
        if (!data) return true;
        if (data.toString().trim().length <= 0) return true;
        return false;
    } catch (error) {
        throw new Error(error);
    }
};

/**
 * requierd field function
 * @param  data .
 * @description check if requerid json is empty or not. give blank json if requierd value is not empty.
 * @returns true or false.
 */
export const isRequired= (data,key, value)=>{
    try {
        if (isEmpty(data)) return { [key]: value };
        return {};
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * check object is empty or not.
 * @param  {Object} data The object.
 * @description true for empty false for not empty.
 * @returns true or false.
 */ 
export const isEmptyObj = (data) => {
    try {
        if (!data) return true;
        return !Object.keys(data).length > 0;
    } catch (error) {
        throw new Error(error);
    }
};