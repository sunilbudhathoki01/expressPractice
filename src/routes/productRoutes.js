import express, { Router } from "express"
// import config  from "./config/config.js"
import productController from "../controllers/productController.js"
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("Radha ballav shree bharibans")
})
router.post("/",(req,res)=>{
const name=req.body.name
const Address=req.body.Address;
const user={name,Address}
res.json(user)
})

router.get("/data",productController.getDatafromjson)
router.post("/post",productController.createProducts)
router.delete("/",productController.deleteProduct)
router.put("/",productController.updateProduct)
export default router