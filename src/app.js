import express from "express"
import productRoute from "./routes/productRoutes.js"
import config from "./config/config.js"
import databaseConnect from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js";
const app=express()
databaseConnect()

app.use(express.json())
app.use("/api/products",productRoute)
app.use("/api/auth",authRoute)

app.use("/api/user",userRoute)


app.listen(config.port,()=>{
    console.log(`server running at ${config.port}`)
})