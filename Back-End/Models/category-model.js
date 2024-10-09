import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:
     { type: String,
         required: true,
          unique: true 
    },
    description: 
    { 
        type: String

    },
   
});

let  category = mongoose.model('Category', categorySchema);
export default category