import jwt from "jsonwebtoken"
export default (data) => {
    return jwt.sign(data, "privatekey")
}