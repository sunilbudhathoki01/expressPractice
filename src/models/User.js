import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
        },
      Address:{
        type:{
        city:{
            type:String,
            required:[true,"city is required"]
        },
        country:{
            type:String,
            required:[true,"Country is required"]
        },
    },
        required:[true,"Address is required"] // This validator applies to the Address object itself
},
        email:{
            type:String,
        required:[true,"Email is required"],
        validate:{
            validator:(value)=>{
                const emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           emailRegex.test(value)
            },
            message:"invalid format"
        }
        },
        contact:{
            type:String,
            required:[true,"Number is required"],
            // min:[10,"minimum 10 digits"],
            // max:[10,"maximum 10 digits"]
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        // roles:{
        //     type:String,
        //     default:1,
        //     default:["USER"],
        //     enum:["ADMIN","User","MERCHANT"],
        // }

})
const User=mongoose.model("User",userSchema)
export default User