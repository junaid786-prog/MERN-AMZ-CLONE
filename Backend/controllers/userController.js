const User = require("../models/userModel");
const { sendToken } = require("../utils/JWTtoken");

// ========================== USER REGISTERATION ACCOUNT ============================ //

// Register a new user
exports.registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return res.status(402).json({
      success: false,
      message: "Email Already Registered",
    });
  }
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch {
    if (Error) {
      console.log(Error);
      console.log("error occured");
    }
  }

  // storing token into cookie
};

// Login a user

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return console.log("Enter email and password");
  }
  // .select -> Specifies which document fields to include or exclude (also known as the query "projection")
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({
      message: "invalid email or password",
    });
  }
  // compare passwords is present in userSchema -> user methods
  const isPasswordMatched = await user.comparePasswords(password);

  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "invalid email or password",
    });
  }

  sendToken(user, 200, res);
};

// logout user
exports.logoutUser = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(201).json({
    sucess: true,
    message: "logged out",
  });
};

// =========================== USER PROFLE =========================== //
// see profile
exports.userProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return console.log("not logged in");
  res.status(201).json({
    user,
  });
};

// update user profile
exports.updateProfile = async (req, res) => {
  const updatedUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, updatedUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "user profile has been updated",
  });
};
// update user password
exports.updatePassword = async (req, res) => {
  const user = await User.findById(req.user.id).select("+password");
  if (!user) {
    return res.status(401).json({
      message: "user not found",
    });
  }

  const isPasswordMatched = await user.comparePasswords(req.body.oldPassword);
  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "passwords is invalid",
    });
  }
  if (req.body.newPassword !== req.body.confirmPassword) {
    return res.status(401).json({
      message: "passwords does not match",
    });
  }
  user.password = req.body.newPassword;
  await user.save();
  sendToken(user, 200, res);
};

// ================== For Admin ============================ //
//1. to get all users

exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  res.status(200).json({
    success: true,
    allUsers,
  });
};
//2. to get single user

exports.getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(401).json({
      message: "there is no user with this id",
    });
  }
  res.status(200).json({
    success: true,
    user,
  });
};
//3. update user role

exports.updateUserRole = async (req, res) => {
  const updatedUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, updatedUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!user) {
    res.status(400).json({
      success: false,
      message: "user is not found against this id",
    });
  }
  res.status(200).json({
    success: true,
    message: "user role has been updated",
  });
};

//4. delete a user

exports.deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400).json({
      success: false,
      message: "user is not found against this id",
    });
  }
  await user.remove();

  res.status(200).json({
    success: true,
    message: "user is successfully deleted",
  });
};
