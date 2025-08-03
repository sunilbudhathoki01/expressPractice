import express from "express";
import fs from "fs";
import config from "./config/config.js";

const app = express();


app.get("/", (req, res) => {
  res.status(300).send("shree Radha Radha Radha Krishna krishna hari");
  
});
// for env prac
app.get("/env",(req,res)=>{
    res.json({
        name:config.name,
        port:config.port,
        version:config.version,
        feature:config.Feature_Test

    })
})
app.get("/hello",(req,res)=>{
    res.status(300).send("not found")
})
app.get("/product",(req,res)=>{
    const product=["mahindra","thar","suzuki","Ford"]
    res.json(product)
})
app.get("/products",(req,res)=>{
    const products=fs.readFileSync("./src/data/products.json","utf-8")
    const productsobj=JSON.parse(products)
    res.send(productsobj)
})
app.post("/",(req,res)=>{
    res.send("creating method")
})
app.put("/",(req,res)=>{
    res.send("updating method")
})
app.delete("/",(req,res)=>{
    res.send("deleting method")
})
app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`);
});
