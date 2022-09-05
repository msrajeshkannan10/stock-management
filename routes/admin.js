const express = require("express");
const router = express.Router();

const admin = require("../controller/admin")

router.post("/post/data",admin.data)
router.get("/get/data",admin.getData)


module.exports=router;