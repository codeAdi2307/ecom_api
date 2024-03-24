import User from "../model/User.js"
import Jwt  from "jsonwebtoken";
// register
export const userRegister = async (req,res)=>{

const {username,email,isAdmin,password} = req.body;
const newUser = await new User({
    username,
    email,
    isAdmin,
    password
});
try {
    const savedUser =  await newUser.save()
    res.json(savedUser)
} catch (error) {
    res.json(error)
}
}

// Login
export const userLogin = async (req,res)=>{

    const {email,password} = req.body;

    try {
        const userData = User.findOne({email});
        if(!userData){
            return res.json({message: "User not registered"})
        }
        const getPassword = userData.password;
        if(getPassword == password){
            const accessToken = Jwt.sign({
                _id: userData._id,
                isAdmin: userData.isAdmin
            },"aditya",{expiresIn:"3d"});
            
            return res.json({message: `Welcome Back ${userData.username}`,accessToken})
        }
    } catch (error) {
        res.json(error)
    }
    }

    // update
    // export const userUpdate = async(req,res,next)=>{
    //        if(req.user.id === req.params.id || req.user.isAdmin){
            
    //        }
    // }
    // delete
    export const userDelete = async (req,res,next)=>{
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({message:"User has been deleted"})
        } catch (error) {
            res.json({error})
        }
    }

    // get user by id
    export const userDetails = async (req,res,next)=>{
        try {
            const user = await User.findById(req.params.id)
            res.json(user)
        } catch (error) {
            res.json({error})
        }
    }