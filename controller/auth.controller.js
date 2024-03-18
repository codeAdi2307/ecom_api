import User from "../model/User.js"
import jsonwebtoken from "jsonwebtoken"
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
            const accessToken = jsonwebtoken.sign({
                _id: userData._id,
                isAdmin: userData.isAdmin
            },"aditya",{expiresIn:"3d"});
            
            return res.json({message: `Welcome Back ${userData.username}`,accessToken})
        }
    } catch (error) {
        res.json(error)
    }
    }