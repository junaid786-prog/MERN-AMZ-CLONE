// which user will access which parts of website
const req = require("express/lib/request");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const JWT_SECRETKEY = "12344467890789576787";

exports.isAuthenticated = async (req, res, next)=> {
    const token = req.cookies.token;
    if(!token){
        return res.status(200).json({
            message:"access denied",
        })
    }
    const obtainedData = jwt.verify(token, JWT_SECRETKEY);
    req.user =await User.findById(obtainedData.id); // v imp -> this make that user able
    next();
};

exports.isAuthorizedRole = (...role)=>{
    //console.log(role);
    

    return async (req, res, next)=>{
        if(!role.includes(req.user.role))
        return res.status(401).json({
            success:false,
            message:"you are not allowed to access this feature",
        })

        return next();
    }
}

