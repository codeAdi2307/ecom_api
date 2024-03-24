import Jwt  from "jsonwebtoken";

export const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        Jwt.verify(token,"aditya",(err,user)=>{
            if(err){
                res.json("Token is not valid");
            }else{
                req.user = user;
                next();
            }
        });
    }else{
        return res.json("You are not verified token")
    }
}

export const verifyTokenAndAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
    
        }else{
            res.json("You are not allowed to make the chnages")
        }
    })
}
export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };