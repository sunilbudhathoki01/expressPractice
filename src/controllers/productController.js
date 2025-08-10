import express from "express"
import fs from "fs"
import productService from "../services/productService.js";
import model from "../models/Product.js";
// const getDatafromjson=(req,res)=>{
//     const products=productService.getproducts();
//     res.json(products);
// }
// const getSqaure=(req,res)=>{
// //     const square=productService.getsquare()
// //     res.json(square)
// }


// Crud Start from here
const createProducts=async(req,res)=>{
  try {
      const data=await productService.createProducts(req.body)
     res.status(201).json(data)
  } catch (error) {
    res.status(501).send(error.message)
    
  }
}
const deleteProduct=async(req,res)=>{
try {
    const id=req.params.id
const product =await productService.deleteProduct(id)
res.json(`products deleted of id:${id}`)

} catch (error) {
    res.json(error.message)
}
}
const updateProduct=async(req,res)=>{
 try {
       const product=await productService.updateProduct(req.params.id,req.body)
    res.status(201).json(product)
 } catch (error) {
    res.json(error.message)
 }
}
const getProducts=async(req,res)=>{
// console.log(req.query)
// const Product=model.find()
// res.json(Product)
const products=await productService.getproducts()
res.status(200).json(products);
}
const getproductById=async(req,res)=>{
    const product=await productService.getproductById(req.params.id)

    res.json(product)

}
export default {getProducts,getproductById,createProducts,deleteProduct,updateProduct}

