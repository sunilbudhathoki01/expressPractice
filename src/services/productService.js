import express from "express"
import fs from "fs"
const getproducts=(req,res)=>{
    const rawData=fs.readFileSync("./src/data/products.json","utf8");
    const data=JSON.parse(rawData);
    const filteredData=data.filter(p=>p.price==1219.99)
if(!filteredData)return res.status(401).send("not found")
    
        return filteredData;

}
export default {getproducts}