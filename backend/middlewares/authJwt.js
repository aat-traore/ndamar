const roles = require("./role");
const jwt = require('jsonwebtoken');

 exports.adminAuth = (req, res, next) => {
  const token = req.cookies
  if (!token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" })
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" })
        } else {
          next()
        }
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" })
  }
}
 exports.roleAuth = ( req, res, next)=>{

   if (req.user.role!=="admin"){
    res.status(401)
    return res.send('not authorized')
   }
    next()

 }



