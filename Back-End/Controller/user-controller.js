import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../Models/user-model.js";

// User Signup
export const registerUser = async (req, res) => {
    try {
        let userdata = req.body;
        let isEmailExisted = await user.findOne({ email: userdata.email });
        if (isEmailExisted) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(userdata.password, 10);
        userdata.password = hashedPassword;

        // Create new user
        const newUser = await user.create(userdata);

        return res.json({ message: "User created successfully", newUser });
    } catch (error) {
        res.status(500).json({ message: "Error in registration", error: error.message });
    }
};

// User Login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email });

        if (!User) return res.status(400).json({ message: "User not found" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token using the private key from .env
        const token = jwt.sign({ userId: User._id, role: User.role }, process.env.PRIVATE_KEY, {
            expiresIn: "1h",
        });
      
        // Return the token and a success message
        return res.json({ message: "Login successful", token });
    } catch (error) {
        return res.status(500).json({ message: "Error in login", error: error.message });
    }
};
export const logoutUser=async(req,res)=>{
    try {
      res.clearCookie("jwt");
      return res.status(200).json({message :"logged out successfully"})
    }catch(error){
  return res.status(500).json(error.message)
    }
  }
  //get all user 
  export const getAllUsers = async (req, res) => {
    try {
        const users = await user.find({}, 'name email role'); // Fetch only name, email, and role
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};