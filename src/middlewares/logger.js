const logger =(req,res,next)=>{
const method=req.method;
const url=req.originalUrl;
console.log("method:"+method+" url:"+url)
next()
}
export default logger