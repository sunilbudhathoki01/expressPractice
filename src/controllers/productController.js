import express from "express"
import fs from "fs"
import productService from "../services/productService.js";
const getDatafromjson=(req,res)=>{
    const products=productService.getproducts();
    res.json(products);
}
const createProducts=(req,res)=>{
    res.json("creating a product")
}
const deleteProduct=(req,res)=>{
res.json("deleting a product:")
}
const updateProduct=(req,res)=>{
    res.json("updating a product")
}
export default {getDatafromjson,createProducts,deleteProduct,updateProduct}

