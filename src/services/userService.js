import express from "express"
import userModel from "../models/User.js"
// create User
const createUser=async(data)=>{
   const user =await userModel.create(data)
   return user;
}
// const createuser=(data)=>userModel.create(data)  another way of creating function
// getUser
const getUser=async()=>{
 const user=await userModel.find()
 return user
//  GetById
}
const getUserById=async(id)=>{
const user=await userModel.findById(id)
return user
}
// delete by id
const deleteUser=async(id)=>{
const user=await userModel.findOneAndDelete(id)
return user
}
// Update
const updateUser=async (id,data,)=>{
    const user=await userModel.findByIdAndUpdate(id,data,{new:true})
    return user
}
export default {createUser,getUser,getUserById,deleteUser,updateUser}