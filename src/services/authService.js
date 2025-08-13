import User from "../models/User.js";

const register=async(data)=>{
    return await User.create(data);
}
export default {register}