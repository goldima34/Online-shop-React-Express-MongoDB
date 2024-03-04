const uuid = require("uuid");
const { path } = require("path");

class FileServise {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log("fileServise error: " + e);
    }
  }
}

module.export = new FileServise();
