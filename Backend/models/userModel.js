// schema for a user
/*
- bcrypt -> to convert password into hash
- jsonwebtoken -> to generate a token
- nodemailer -> 
- validator -> to validate is it gmail or not
- cookie-parser -> to store web tokens in cookie
- body-parser
*/
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    maxlength: [20, "Max length for name is 20 characters"],
    minlength: [5, "Min length for name is 5 characters"],
  },
  email: {
    type: String,
    required: [true, "Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
    minlength: [8, "Enter password with more than 8 characters"],
    select: false, // when find method is called all fields will be shown except password
  },
  avtar: {
    public_id: {
      type: String,
      //required: "insert product image",
    },
    url: {
      type: String,
      ///required: "insert product image",
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPassword: String,
  resetPasswordExpire: Date,
});
// pre mean before and condition is save - > before savin user schema
// firstly check if password field is not modified then leave it
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
// JWT tokens
const JWT_SECRETKEY = "12344467890789576787";
const JWT_EXPIRE = 13000000000;

// userSchema methods
// to generate a web token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, JWT_SECRETKEY, {
    expiresIn: JWT_EXPIRE,
  });
};

userSchema.methods.comparePasswords = async function (providedPassword) {
  let isOk = await bcrypt.compare(providedPassword, this.password);
  return isOk;
};

module.exports = mongoose.model("user", userSchema);
