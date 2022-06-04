import { ServerResponse } from "http";

const authController : any = {}

const db = {}

authController.signup  = (req : any,res : any, next : any)=> {
//just create a user using an email and create a session
const { email } = req.body
if(!email) return res.status(400).json({message : "An email is required"})
//change this to check user in db
let emailExistsInDb = false
if(emailExistsInDb){
    return res.status(409).json({message : "User already exists"})
}
else {
    //create a user in db
    const data = {}
    return res.status().json(data)
}



}


authController.login = (req : Request, res :ServerResponse, next : any)=> {
    console.log("Reeived login")
}
module.exports = authController