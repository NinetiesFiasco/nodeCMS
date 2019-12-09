
const { 
    register,
} = require("./service");

const md5 = require('md5');

module.exports = {
    register: (req,res) => {
        const body = req.body;
        body.password = md5(body.password+'myLittleSecret'+body.login);
        register(body,(err,results)=>{
            return res.status(200).json({
                success: 1,
                data: results
            });
        });        
    }
}