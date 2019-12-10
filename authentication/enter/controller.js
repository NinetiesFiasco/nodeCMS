const { enter } = require('./service');

const md5 = require('md5');

function makeToken(user){

    var token = {
        login: user.login,
        email: user.email,
        password: user.password,
        controlSumm: md5(user.password+process.env.TOKEN_SECRET+user.login+user.email)
    }
    token = JSON.stringify(token);
    return Buffer.from(token).toString('base64');
}

module.exports = {
    enter: (req,res)=>{
        const body = req.body;
        body.password = md5(body.password+process.env.REGISTER_SECRET+body.login);
        enter(body,(err,results)=>{
            if (err)
                return res.json({
                    success: 0,
                    message: err
                });
            
            var token = makeToken(results);
            res.cookie('logToken',token,{maxAge:1000*60*10})
            
            return res.status(200).json({
                success: 1,
                data: results,
                token: token
            });            
        });
    }
}