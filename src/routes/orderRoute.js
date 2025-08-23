import express from "express";
import orderController from "../controllers/orderController.js";
import { config } from "dotenv";

const router=express.Router()
router.get("/",orderController.getAllOrder)
router.get("/:id",orderController.getOrderById)
router.post("/",orderController.createOrder)
router.delete("/:id",orderController.deleteOrder)
router.put("/:id",orderController.updateOrder)
// app.listen(400,()=>{
//     console.log(`server is running on port ${config.port}`)
// })

export default router


