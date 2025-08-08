// // Crud Opearation
// import expess from "express"
// import config from './src/config/config.js';
// import fs from "fs"

// const app=expess();
// app.use(expess.json())
// let users=[
//     {id:1,name:"sunil",Address:"Banepa"},
//      {id:2,name:"aashish",Address:"ktm"},
//       {id:3,name:"messi",Address:"Dhulikhel"}
// ]

// app.get("/users",(req,res)=>{
// res.json(users)
// })

// // get by id
// app.get("/users/:id",(req,res)=>{
//     const id=parseInt(req.params.id);
//     const user=users.find(u=>u.id===id)
//         if(!user)res.status(401).send("User not found")
//                     res.json(user)

// })
// // Post
// app.post("/users",(req,res)=>{
//     const id=req.body;
//     const name=req.body
//     const newUser=(id,name,Address)
//     users.push(newUser)
//     res.status(201).json(newUser)
// })

// // delete
// app.delete("/users/:id", (req, res) => {
//   users = users.filter(u => u.id!== parseInt(req.params.id));
//   res.send("User deleted");
// });

// // Put
// app.put("/users/:id",(req,res)=>{
// const id=parseInt(req.params.id);
// const user=users.find(u=>u.id===id);
// user.name=req.body.name
// user.Address=req.body.Address
// res.json(user)

// })

// // jason data prac
// app.get("/env",(req,res)=>{
//     res.json({
//         name:config.name,
//         port:config.port,
//         version:config.version,
//         lwade:config.Feature_Test
//     })
// })

// app.get("/allprods",(req,res)=>{
//     const rawData=fs.readFileSync("./src/data/products.json","utf8");
//     const data=JSON.parse(rawData);
//     res.json(rawData)
// })
// app.listen(config.port,()=>{
// console.log(`server running on port ${config.port}`)
// })

