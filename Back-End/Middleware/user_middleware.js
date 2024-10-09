import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
// middlewear for authentication
export const authenticate = async (req, res, next) => {
    try {
        if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization token is missing" });
        }

        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        jwt.verify(token, process.env.PRIVATE_KEY, (error, decoded) => {
            if (error) {
                if (error.name === "TokenExpiredError") {
                    return res.status(401).json({ message: "Token has expired", error: error.message });
                } else if (error.name === "JsonWebTokenError") {
                    return res.status(401).json({ message: "Invalid token", error: error.message });
                } else {
                    return res.status(403).json({ message: "You are not authorized", error: error.message });
                }
            }

            req.user = decoded; // Store the decoded token data
            next();
        });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

// Middleware for Password Hashing (for Signup)
export  const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
        }
        next();
    } catch (error) {
        return res.status(500).json({ message: "Error in password hashing", error: error.message });
    }
};
