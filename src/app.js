import express from "express"
import productRoute from "./routes/productRoutes.js"
import config from "./config/config.js"
import bodyParser from "body-parser";
const app=express();

app.use(bodyParser.json())

app.use(express.json())
app.use("/products",productRoute)


app.listen(config.port,()=>{
    console.log(`server running at ${config.port}`)
})