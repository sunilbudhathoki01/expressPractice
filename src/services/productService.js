import express from "express"
import fs from "fs"
import model from "../models/Product.js";

//  const rawData=fs.readFileSync("./src/data/products.json","utf8");
//     const products=JSON.parse(rawData);
// // const getproducts=()=>{
   
// //     // const filteredData=data.filter(p=>p.price==1219.99)
// //      return data ;
// // // if(!filteredData)return res.status(401).send("not found")
    
// // }

// const getsquare=(value=>value*value)
// const finalsquare=getsquare(4);


// getProducts
const getproducts=async(query)=>{
// const filteredProducts=model.filter((product)=>product.category==query.category)
const products=await model.find()
return products
}

// GetById
const getproductById=async(id)=>{
    // const findProduct=products.filter(prod=>prod.category==query.category)
    // return findProduct;
    const product=await model.findById(id)
    return product;
}
// Post
const createProducts=async(data)=>{
     const pros=await model.create(data)
     return pros
}
// Delete
const deleteProduct=async(id)=>{
    const product=await model.findOneAndDelete(id)
    return product

}
// Update
const updateProduct=async(id,data)=>{
    const product=await model.findByIdAndUpdate(id,data)

}


export default {getproducts,getproductById,createProducts,deleteProduct,updateProduct}