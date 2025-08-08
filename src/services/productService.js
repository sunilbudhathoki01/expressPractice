import express from "express"
import fs from "fs"
 const rawData=fs.readFileSync("./src/data/products.json","utf8");
    const data=JSON.parse(rawData);
const getproducts=()=>{
   
    // const filteredData=data.filter(p=>p.price==1219.99)
     return data ;
// if(!filteredData)return res.status(401).send("not found")
    

}
const getsquare=(value=>value*value)
const finalsquare=getsquare(4);

const getproductById=(query)=>{
    const findProduct=data.filter(prod=>prod.category==query.category)
    return findProduct;
}
const createProducts=(dat)=>{
console.log(dat)
data.push(dat)
}


export default {getproducts,getsquare,getproductById,createProducts}