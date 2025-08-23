import orderModel from "../models/order.js";
import crypto from "crypto"
// getAll
const getAllOrder=async()=>{
const order=await orderModel.find()
return order
}

// getById
const getOrderById=async(id)=>{
    const order=await orderModel.findById(id);
    return order
}

// create order
const createOrder=async(data,userId)=>{
    const orderNumber=crypto.randomUUID()
    const order=await orderModel.create({...data,userId,orderNumber})
    return order
}
// delete order
const deleteOrder=async(id)=>{
    const order=await orderModel.findByIdAndDelete(id)
    return order
}

// update order
const updateOrder=async(data,id)=>{
    const order=await orderModel.findByIdAndUpdate(id,data,{new:true})
    return order
}
export default {getAllOrder,getOrderById,createOrder,deleteOrder,updateOrder}