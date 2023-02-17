const express=require("express");
const controller=require("../controllers/controllers.js");
const router=express.Router();
router.get("/", controller.home);
router.get("/about", controller.about);


module.exports=router;