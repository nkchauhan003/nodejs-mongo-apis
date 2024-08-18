import mongoose from "mongoose";
import { UserSchema } from "../models/user";

const User = mongoose.model('User', UserSchema);

export const createUser = async (req, res) => {
    let user = new User(req.body);
    const newUser = await user.save();
    res.send(newUser);
}

export const retrieveUserList = async (req, res) => {
    const users = await User.find({});
    res.send(users);
}

export const retrieveUser = async (req, res) => {
    const user = await User.findById(req.params.userId);
    res.send(user);
}

export const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true });
    res.send(user);
}

export const deleteUser = async (req, res) => {
    const user = await User.deleteOne({ _id: req.params.userId })
    res.send("User deleted successfully !!!");
}

