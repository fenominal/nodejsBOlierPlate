import multer from "multer";
import express from "express";
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let filetype = file.mimetype;
    console.log("file :-", file);
    if (filetype.includes("audio")) {
      cb(null, "D:/vspl/APi_node_biolerplate/public/audio");
    } else if (filetype.includes("video")) {
      cb(null, "D:/vspl/APi_node_biolerplate/public/video");
    } else if (filetype.includes("images")) {
      cb(null, "D:/vspl/APi_node_biolerplate/public/images`");
    } else {
      cb(null, "D:/vspl/APi_node_biolerplate/public/files");
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

/**
 * helpr function to  upload the files and return responce with data.
 * @author Patel Ayush
 * @param (request and response)
 */
export function uploadFile(req, res, next) {
  console.log("hhhh");
  upload.single("file")(req, res, (err) => {
    console.log("error :-",err);
  });
  next();
}
