import mongoose from "mongoose";
import { type } from "os";

const productSchema=new mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    price:Number,
    createdAt:{
        type:Date,
        default:Date.now
    }

})
const model=mongoose.model("Product",productSchema)
export default model