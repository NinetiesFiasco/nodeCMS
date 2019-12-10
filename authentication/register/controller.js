
const { 
    register,
} = require("./service");

const md5 = require('md5');

module.exports = {
    register: (req,res) => {
        const body = req.body;
        if (body.password.length<4)
            res.json({
                success: 0,
                message: "Пароль слишком короткий"
            });            
        body.password = md5(body.password+process.env.REGISTER_SECRET+body.login);
        register(body,(err,results)=>{
            return res.status(200).json({
                success: 1,
                data: results
            });
        });        
    }
}