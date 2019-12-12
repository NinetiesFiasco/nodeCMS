const { 
    register,
} = require("./service");

const md5 = require('md5');

function passwordHash(user){
    return md5(user.password+process.env.REGISTER_SECRET+user.login);
}

module.exports = {
    passwordHash: passwordHash,
    register: (req,res) => {
        const body = req.body;
        if (body.password.length<4)
            return res.json({
                success: 0,
                message: "Пароль слишком короткий"
            });


        body.password = passwordHash(body);

        register(body,(err,results)=>{

            if (err)
                return res.send(err);            
                
            return res.status(200).json({
                success: 1,
                data: results
            });
            
        });
    }
}