/**
 * Node FS Example
 * Node JS Write to File
 */
import fs from "fs";

import {dirPath} from "./function.js";

// appendToFile(directoryPath("/files/logs.txt"),"...Add Check...");

var writeStream = fs.createWriteStream(dirPath("./variables/credentials.js"));
writeStream.write(`
export const smpt_credentials ={

}

export const google_credentials={

}


export const DB_credentials={
    URL : ""
}

`);

writeStream.end();
