import { ServerResponse } from "http";

//handles all the auth routes.
export{}
const express = require("express");
const router = express.Router();
const authController = require("../services/Auth/AuthController")


router.post("/signup", (req : Request,res : Response, next : any)=> authController.signup(req,res, next))

router.post("/login", (req : Request, res : ServerResponse, next : any)=> authController.login(req,res,next))

module.exports = router;