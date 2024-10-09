import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
    wishlist: [
        {
            type: mongoose.Types.ObjectId,
            ref: "products",
        },
    ],
    cart: [
        {
            type: mongoose.Types.ObjectId,
            ref: "product",
        },
    ],
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: "order",
        },
    ],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
