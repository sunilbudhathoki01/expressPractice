import dotenv from "dotenv"
dotenv.config()
const name=process.env.name
const port=process.env.port
const version=process.env.version
const lwade=process.env.lwade

const config={
    name:process.env.name,
    port:process.env.port,
    version:process.env.version,
    Feature_Test:1,
}
export default config




// import dotenv from "dotenv"
// dotenv.config()
// const name=process.env.name
// const version=process.env.version
// const port=process.env.port
// const config={
//     name:process.env.name,
//     version:process.env.version,
//     port:process.env.port,
//     Feature_Test:parseInt(process.env.Feature_Test)?"enabled":"disabled"
// };

// export default config;