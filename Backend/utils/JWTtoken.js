// creating token and storing it to cookie

const COOKIE_EXPIRE = 3;
exports.sendToken= (user, statusCode, res)=>{
    const JWT_TOKEN = user.getJWTToken();
    //cookie options
    const options = {
        expiresIn: new Date( Date.now()+ COOKIE_EXPIRE * 24 * 60 * 60 * 100), //milli seconds
        httpOnly:true,
    };

    res.status(statusCode).cookie("token", JWT_TOKEN, options).json({
        success:true,
        user,
        JWT_TOKEN,
    })
}
