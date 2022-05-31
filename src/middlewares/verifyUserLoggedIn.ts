const sessionIdCache = require("../db/sessionIdCache")

type ReqCookie = {
    cookies : any
}


const verifyUserLoggedIn = (req : Request & ReqCookie,res : any,next : any)=> {

if(req.cookies && req.cookies.sessionId){
    //theres an id
    if(req.cookies.sessionId in sessionIdCache){
        //logged in and session contains
        next()
    }
    else {
        return res.status(401).json({message : "Please Login"})
    }
}
else {
    return res.status(401).json({message : "Please Login"})
}

}