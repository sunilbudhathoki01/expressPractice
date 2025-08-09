import express from "express"
import fs from "fs"
import productService from "../services/productService.js";
// const getDatafromjson=(req,res)=>{
//     const products=productService.getproducts();
//     res.json(products);
// }
// const getSqaure=(req,res)=>{
// //     const square=productService.getsquare()
// //     res.json(square)
// }


// Crud Start from here
const createProducts=(req,res)=>{
    productService.createProducts(req.body)
    res.status(200).json("Products Created successfully!")
}
const deleteProduct=(req,res)=>{
    const id=req.params
productService.deleteProduct(id)
res.status(200).send(`product deleted of ID:${id}`)
}
const updateProduct=(req,res)=>{
    productService.updateProduct()
}
const getProducts=(req,res)=>{
console.log(req.query)
}

const getproductById=(req,res)=>{
    const product=productService.getproductById(req.query)
    res.json(product)

}
export default {getProducts,getproductById,createProducts,deleteProduct,updateProduct}

