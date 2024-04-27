// commenly use function files.

import path from "path";
import { fileURLToPath } from "url";


/**
 * function for make path.
 * @author Patel Ayush
 * @param path as string
 */
export const dirPath = (relativePath) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, "..", relativePath);
};

/**
 * append date in file.
 * @description it append data in text file.
 * @author Patel Ayush
 * @param filename 
 * @param dataToAppend
 */
export const appendToFile = async (filename, dataToAppend) => {
  try {
    await fs.appendFile(filename, dataToAppend + "\n", "utf8");
    // console.log('Data was appended to the file successfully');
  } catch (err) {
    console.error("Error appending to file:", err.message);
  }
};
