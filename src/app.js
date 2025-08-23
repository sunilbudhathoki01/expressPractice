import express from "express"
import productRoute from "./routes/productRoutes.js"
import config from "./config/config.js"
import databaseConnect from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
import roleBasedAuth from "./middlewares/roleBasedAuth.js";
import { ADMIN, MERCHANT, USER } from "./constants/role.js";
import orderRoute from "./routes/orderRoute.js"

const app=express()
databaseConnect()

app.use(express.json())
app.use("/api/auth",authRoute)
app.use(logger)
app.use(auth)
app.use("/api/products",productRoute)
app.use("/api/user",auth,roleBasedAuth(ADMIN),userRoute)
// app.get("/hello",(req,res)=>{
//     res.json("getting or fetching the data")
// })
app.use("/api/orders",auth,roleBasedAuth(ADMIN),orderRoute)


app.listen(config.port,()=>{
    console.log(`server running at ${config.port}`)
})