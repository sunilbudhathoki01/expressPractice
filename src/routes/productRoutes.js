import express, { Router } from "express"
// import config  from "./config/config.js"
import productController from "../controllers/productController.js"
import auth from "../middlewares/auth.js"
import roleBasedAuth from "../middlewares/roleBasedAuth.js"
import { MERCHANT, USER } from "../constants/role.js"
const router=express.Router()

// router.get("/",(req,res)=>{
//     res.send("Radha ballav shree bharibans")
// })
// router.post("/",(req,res)=>{
// const name=req.body.name
// const Address=req.body.Address;
// const user={name,Address}
// res.json(user)
// })
router.get("/",productController.getProducts)
// router.get("/data",productController.getDatafromjson)
router.post("/",[auth],roleBasedAuth(MERCHANT),productController.createProducts)
router.delete("/:id",[auth],roleBasedAuth(MERCHANT),productController.deleteProduct)
router.put("/:id",[auth],roleBasedAuth(MERCHANT),productController.updateProduct)
// router.get("/square",productController.getSqaure)
router.get("/:id",productController.getproductById)
export default router