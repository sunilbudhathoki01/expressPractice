import express from "express";
import fs from "fs";
const app = express();

app.get("/", (req, res) => {
  res.send("shree Radha Radha Radha Krishna krishna hari");
  res.status(300)
});
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
app.listen(4000, () => {
  console.log("Server running at port 4000");
});
