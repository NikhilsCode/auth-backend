import { Router } from "express";
import authentication from "../middleware/tokenChecker.js"
import cookiechecker from "../middleware/cookieChecker.js"
const userRoute =  Router();
let userData = [
    {userId:1, userName: "nikhilsavant", role:"Software engineer"},
    {userId:2, userName: "jayNilgulkar", role:"Software engineer"},
    {userId:3, userName: "harshshah", role:"Software engineer"},
    {userId:4, userName: "nilaypatel", role:"Software engineer"},
    {userId:5, userName: "tanakpatel", role:"Software engineer"},

]; 
userRoute.get("/",authentication, cookiechecker,(req, res) => {
    res.status(200).send({data:userData});
})
userRoute.get("/:userId",cookiechecker, (req, res) => {
console.log(req.params.userId)
    const id = parseInt(req.params.userId);
    if(!isNaN(id)){
        const data = userData.filter((user)=> {
            return user.userId == id
        })
        res.status(200).send({data:data});
    }else
    res.status(400).send({msg:"invalid userId"})
})

export default userRoute;