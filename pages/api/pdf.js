// import { fromBuffer } from "pdf2pic";

let fs = require("fs");
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  // if (req.method == "POST") {
  //   const form = new formidable.IncomingForm();
  //   form.uploadDir = "files";
  //   form.keepExtensions = true;
  //   form.parse(req, (err, fields, files) => {
  //     // res.json(files.file);
  //     console.log(files.file);
  //   });
  // }
  console.log(req);
  // const options = {
  //   density: 100,
  //   saveFilename: "untitled",
  //   format: "png",
  //   width: 600,
  //   height: 600,
  // };

  // const storeAsImage = fromBuffer(buffer, options).convert(1, true)
  // const pageToConvertAsImage = 1;
  // storeAsImage(pageToConvertAsImage).then((resolve) => {
  //   console.log("Page 1 is now converted as image");

  //   return resolve;
  // });
}
