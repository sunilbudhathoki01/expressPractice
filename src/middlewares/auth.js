import { createJwt, verifyjwt } from "../utils/jwt.js";

const auth = async (req, res, next) => {
    const cookie = req.headers.cookie;
    if (!cookie) {
        return res.status(401).json("user not authenticated");
    }

    const authtoken = cookie.split("=")[1];

    try {
        const data = await verifyjwt(authtoken);
        req.user = data;
    } catch (error) {
        // If an error occurs, send the response and return
        return res.status(400).json("invalid token");
    }
    
    // Only call next() if the token is successfully verified
    next();
};

export default auth;



