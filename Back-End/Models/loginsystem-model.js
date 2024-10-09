import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,

  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
  role: {
    type: String,
    default: "admin"
}
});

const auth = mongoose.model('Logintest', userSchema);
export default auth