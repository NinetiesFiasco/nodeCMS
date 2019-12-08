
const { 
    register,
} = require("./service");

//const { genSaltSync, hashSync, compareSync} = require("bcryptjs");
//const { sign } = require("jsonwebtoken");
const md5 = require('md5');

function simpleHandler(err,results){    
    
    if (err){
        console.log(err);
        return err.status(500).json({
            success: 0,
            message: "Database connection error"
        });
    }
    return res.status(200).json({
        success: 1,
        data: results
    });
}


module.exports = {
    register: (req,res) => {
        const body = req.body;
        console.log(body);
        console.log(body.password);
        body.password = md5(body.password+'myLittleSecret'+body.login);
        register(body,(err,results)=>{
            return res.status(200).json({
                success: 1,
                data: results
            });
        });        
    }
}