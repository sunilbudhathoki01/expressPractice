import mongoose from "mongoose";
import { type } from "os";

const productSchema=new mongoose.Schema({
    name:{
type:String,
required:[true,"Name field is required"],
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        min:[1,"Products price must be at least 1"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})
const model=mongoose.model("Product",productSchema)
export default model