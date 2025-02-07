export default  (req, res, next) => {

    if(req.signedCookies && req.signedCookies.hello != "" ){
        next();
    }else{
        res.status(404).send({msg: "cookie not found"})
    }
}