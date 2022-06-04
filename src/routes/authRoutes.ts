
//handles all the auth routes.
export{}
const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth/AuthController")


router.post("/signup", (req : Request,res : Response, next : any)=> authController.signup(req,res, next))

router.post("/signup/verify-email", (req : Request,res : Response, next : any)=> authController.verifyEmail(req,res, next))

router.post("/signup/user-details", (req : Request,res : Response, next : any)=> authController.signup(req,res, next))

router.post("/login", (req : Request, res : Response, next : any)=> authController.login(req,res,next))

module.exports = router;