import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-4-1024x1024.jpg"

    },

} ,{timestamps:true});

const User=mongoose.model('User',userSchema);
export default User;