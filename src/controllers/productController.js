import express from "express"
import fs from "fs"
import productService from "../services/productService.js";
const getDatafromjson=(req,res)=>{
    const products=productService.getproducts();
    res.json(products);
}
const createProducts=(req,res)=>{
    productService.createProducts()
    res.status(200).send("Products Created successfully!")
}
const deleteProduct=(req,res)=>{
res.json("deleting a product:")
}
const updateProduct=(req,res)=>{
    res.json("updating a product")
}
const getProds=(req,res)=>{
console.log(req.query)
}
const getSqaure=(req,res)=>{
    const square=productService.getsquare()
    res.json(square)
}
const getproductById=(req,res)=>{
    const q=req.query
    const product=productService.getproductById(q)
    res.json(product)

}
export default {getDatafromjson,createProducts,deleteProduct,updateProduct,getSqaure,getproductById,getProds}

