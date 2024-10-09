import express from "express";
import { registerUser, loginUser, logoutUser, getAllUsers } from "../Controller/user-controller.js";

const userRoutes = express.Router();

// Signup Route
userRoutes.post("/signup", registerUser);

// Login Route
userRoutes.post("/login", loginUser);

// Logout Route
userRoutes.get("/logout", logoutUser);
// get user 
userRoutes.get('/getusers', getAllUsers);
export default userRoutes;
