import jwt from "jsonwebtoken"
import authService from "../services/authService.js"
import { createJwt, verifyjwt } from "../utils/jwt.js";

const login=async(req,res)=>{
    const input=req.body;
    try {
        if(!input){
            return res.json("Required data are missing")
        }
         if(!input.email){
            return res.status(400).json("email  is required")
        }
        if(!input.password){
           return res.status(400).json("password is required")
        }
        const data=await authService.login(input)
        // generate token if login success
     const authtoken=createJwt(JSON.stringify(data))
     res.cookie("authtoken",authtoken,{maxAge:86400*1000})
    //  const result=await verifyjwt(token)
     console.log(authtoken)
     res.json(data)
    } catch (error) {
        res.json(error.message)
    }
}

// register
const register=async(req,res)=>{
    try {
        const input =req.body
        if(!input.confirmedPassword){
            return res.json("confirmed password is req")
        }
        if(input.password!==input.confirmedPassword){
         return res.json("passwords must be matched")

        }
        const data=await authService.register(input)
        const authtoken=createJwt(JSON.stringify(data))
     res.cookie("authtoken",authtoken,{maxAge:86400*1000})
        res.status(201).json(data)

    } catch (error) {
        res.json(error)
        
    }

}
export default {register,login}