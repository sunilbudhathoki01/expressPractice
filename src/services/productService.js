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
const getproducts=((query)=>{
const filteredProducts=model.filter((product)=>product.category==query.category)
})

// GetById
const getproductById=(query)=>{
    // const findProduct=products.filter(prod=>prod.category==query.category)
    // return findProduct;
}
// Post
const createProducts=(data)=>{
     model.create(data)
}
// Delete
const deleteProduct=()=>{

}
// Update
const updateProduct=()=>{

}


export default {getproducts,getproductById,createProducts,deleteProduct,updateProduct}