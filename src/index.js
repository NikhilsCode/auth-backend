import express from "express";
import userRoute from "./rourtes/user.js";
import cookieParser from "cookie-parser";
import tokenGenrator from "./middleware/genrateToken.js"
const app = express();
app.use(cookieParser("NikhilSavant"))
app.use(express.json())

app.get('/', (req, res)=> {
    const token = tokenGenrator({name:"NikhilSavant", userrId: 5, password: "TAnak140802"})
    res.cookie('hello','world',{maxAge: 60000,signed:true});
    res.cookie('authentication',token,{maxAge: 60000});
    res.send({msg:"sucessfull"});
})
app.use("/user", userRoute);

app.listen(3000, ()=> {
    console.log("Server is runing on port 3000")
})