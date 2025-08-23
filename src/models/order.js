import mongoose from "mongoose"
import { ORDER_STATUS_CANCEL, ORDER_STATUS_CONFIRMED, ORDER_STATUS_Delivered, ORDER_STATUS_PENDING, ORDER_STATUS_PROCESSING } from "../constants/orderStatuses.js"

const orderSchema=new mongoose.Schema({
    orderNumber:{
        type:String,
        required:[true,"order number is required"]
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    orderItems:[{
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
        }
    }],
    Status:{
        type:String,
        enum:[ORDER_STATUS_Delivered,ORDER_STATUS_CANCEL,ORDER_STATUS_CONFIRMED,
            ORDER_STATUS_PENDING,ORDER_STATUS_PROCESSING],
      default:ORDER_STATUS_PENDING

    },
    totalPrice:{
        type:Number,
        required:[true,"price is required"]
    },
    shippingAddress:{
        city:{
            type:String,
            required:[true,"Address is required"]
        },
        country:{
            type:String,
            required:[true,"country is required"]
        },
        province:{
            type:String,
            required:[true,"province is required"]
        }
    }
    
})

const orderModel=mongoose.model("Order",orderSchema)
export default orderModel