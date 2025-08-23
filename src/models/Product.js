import mongoose from "mongoose";
import { type } from "os";
import { ref } from "process";

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
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:[true,"created by is required"]

    }

})
const model=mongoose.model("Product",productSchema)
export default model