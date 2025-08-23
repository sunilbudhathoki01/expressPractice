// import express from "express"
// import fs from "fs"
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
const {limit,offset,brand,category,name,min,max}=query;
// const limit=query.limit
// const offset=query.offset
const sort=JSON.parse(query.sort||"{}")
const filter={}
if(brand)filter.brand={$in:brand.split(",")}
if(category)filter.category=category
if(min)filter.price={ $gte:min}
if(max)filter.price={ ...filter.price,$lte:max}
if(name)filter.name={$regex:name,$options:"i"}
const products=await model.find(filter)
.sort(sort)
.limit(limit)
.skip(offset)
return products
}

// GetById
const getproductById=async(id)=>{
    // const findProduct=products.filter(prod=>prod.category==query.category)
    // return findProduct;
    const product=await model.findById(id)
      if(!product){
        throw{
            statusCode:404,
            message:"product not found"
        }
    }
    return product;
}
// Post
const createProducts=async(data,createdBy)=>{
     const pros=await model.create({...data,createdBy})
     return pros
}
// Delete
const deleteProduct=async(id,userId)=>{
    const product1=getproductById(id);
    if(product1.createdBy!==userId){
        throw {
            statusCode:403,
            message:"Access denied"
        }
    }

    const product=await model.findOneAndDelete(id)
    return product

}
// Update
const updateProduct=async(id,data,userId)=>{
    const product1=await getproductById(id)
    if(product1.createdBy!==userId){
        throw{
            statusCode:403,
            message:"Access denied"
        }
    }
    const product=await model.findByIdAndUpdate(id,data)
    return product

}


export default {getproducts,getproductById,createProducts,deleteProduct,updateProduct}