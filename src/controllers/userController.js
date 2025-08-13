import express from "express"
import userService from "../services/userService.js"
// getUser
const getUser=async(req,res)=>{
    const user=await userService.getUser()
    res.json(user)
}
// getuserById
const getUserById=async (req,res)=>{
    const user=await userService.getUserById(req.params.id)
    res.json(user)
}
// create user
const createUser=async (req,res)=>{
  try {
     const user=await userService.createUser(req.body)
   res.status(200).json(user)
   console.log(user)
  } catch (error) {
    res.json(error.message)
    
  }
}
// delete
const deleteUser=async(req,res)=>{
    const id=req.params.id
  try {
      const user=await userService.deleteUser(id)
    res.json(user)
    
  } catch (error) {
    res.json(error.message)
  }
}
const updateUser=async(req,res)=>{
    const id=req.params.id
    const data=req.body
    const user=await userService.updateUser(id,data)
    res.json(user)
}


export default{getUser,getUserById,createUser,deleteUser,updateUser} ;