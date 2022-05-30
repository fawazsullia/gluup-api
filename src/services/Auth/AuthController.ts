import { ServerResponse } from "http";

const authController : any = {}

authController.signup  = (req : Request,res : ServerResponse, next : any)=> {
console.log("request received");
console.log(req.body);
res.end("Received")
}


authController.login = (req : Request, res :ServerResponse, next : any)=> {
    console.log("Reeived login")
}
module.exports = authController