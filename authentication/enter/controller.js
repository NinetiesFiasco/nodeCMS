const {enter} = require('./service');
const {passwordHash} = require('../register/controller');
const {makeToken} = require('./token');


module.exports = {
    enter: (req,res)=>{
        const body = req.body;
        body.password = passwordHash(body);
        enter(body,(err,results)=>{
            if (err)
                return res.json({
                    success: 0,
                    message: err
                });
            
            var token = makeToken(results);
            res.cookie('logToken',token,{maxAge:1000*60*10});
            
            return res.status(200).json({
                success: 1,
                data: results,
                token: token
            });
        });
    },
    exit: (req,res)=>{
        const body = req.body;
        res.cookie('logToken','',{maxAge:-1});
        res.json({
            success: 1,
            message: 'Вы вышли'
        });
    }
}