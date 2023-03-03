const express = require("express")
const router = express.Router();
const API = require("../controller/api");
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.filename + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("image");

router.get("/", API.fetchAllbook);
router.get("/:id", API.fetchbookByID);
router.post("/", upload, API.createbook);
router.patch("/:id", upload, API.updatebook);
router.delete("/:id", API.deletebook);

module.exports = router;