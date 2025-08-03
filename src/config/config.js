import dotenv from "dotenv"
dotenv.config()
const name=process.env.name
const version=process.env.version
const port=process.env.port
const config={
    name:process.env.name,
    version:process.env.version,
    port:process.env.port,
    Feature_Test:parseInt(process.env.Feature_Test)?"enabled":"disabled"
};

export default config;