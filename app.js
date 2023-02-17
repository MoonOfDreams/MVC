const express=require("express");
const app=express();
/* routers */
const routermain=require("./routers/routers");

app.use(express.static("public"))
app.use("/",routermain)
app.listen(3000,()=>console.log("server en 3000"));