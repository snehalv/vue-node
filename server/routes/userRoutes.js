const express = require("express")
const router = express.Router();
const USERAPI = require("../controller/userApi");

router.post("/", USERAPI.signupUser);
router.post("/userlogin", USERAPI.loginUser);

// router.get("/:id", USERAPI.fetchbookByID);
// router.post("/", upload, API.createbook);
// router.patch("/:id", upload, API.updatebook);
// router.delete("/:id", API.deletebook);

module.exports = router;