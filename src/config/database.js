import mongoose from "mongoose";
import express from "express"
import config from "../config/config.js";

async function databaseConnect(){
   try{
const status=await  mongoose
.connect(config.MONGODB_URL)
console.log("connection successfulll at:"+status.connection.host)
  }catch(error){
    console.log(error)
  }
  
}
export default databaseConnect