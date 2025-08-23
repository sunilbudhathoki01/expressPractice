const roleBasedAuth=(role)=>{
    return (req,res,next)=>{
if(req.user.roles.includes(role))
    return next();

return res.status(401).send("Access denied")
    };
};
export default roleBasedAuth