import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getUsers = async (req, res) => {
  res.send("Users");
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(401).send({ message: "Fill all fields" });
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const isUserExist = await User.findOne({email});

      if (!isUserExist) {
        const newUser = { name, email, password: hashedPassword };
        const user = await User.create(newUser);
        res.status(201).send({ message: "Registered Successfully", user });
      } else {
      }
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  }
};

export const signin = async (req, res) => {
  res.send("Signin");
};
export const protect = async (req, res) => {
  res.send("Protect Routes");
};
