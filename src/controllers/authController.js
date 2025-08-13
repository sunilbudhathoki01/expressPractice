import authService from "../services/authService.js"

const register=async(req,res)=>{
    try {
        const data=await authService.register(req.body)
        res.status(201).json(data)

    } catch (error) {
        res.json(error)
        
    }

}
export default {register}