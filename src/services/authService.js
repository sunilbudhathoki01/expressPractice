import User from "../models/User.js";
import bcrypt from "bcryptjs";
// login
const login=async(data)=>{
    const user=await User.findOne({email:data.email})
    if(!user) throw{statusCode:404,message:"user not found"}
    const isPasswordMatch=bcrypt.compareSync(data.password,user.password)


    if(!isPasswordMatch) throw{statusCode:400,message:"Invalid password or email "}
    return user;

}
// register
const register=async(data)=>{
   const user= await User.findOne({email:data.email})
if(user)throw{statusCode:400 ,message:"user already exist"}
    const hashedpassword=bcrypt.hashSync(data.password)
    return await User.create({
         name:data.name,
         Address:data.Address,
         email:data.email,
         contact:data.contact,
         password:hashedpassword,
         roles:data.roles,
         createdBy:data.createdBy

    });
}
export default {register,login}