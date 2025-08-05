import express from "express"
import productRoute from "./routes/productRoutes.js"
import config from "./config/config.js"

const app=express();
app.use(express.json())
app.use("/products",productRoute)


app.listen(config.port,()=>{
    console.log(`server running at ${config.port}`)
})