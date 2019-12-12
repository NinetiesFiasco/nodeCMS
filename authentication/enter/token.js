const md5 = require("md5");

function hashUser(user){
    return md5(user.password+process.env.REGISTER_SECRET+user.login);
}

module.exports = {
    makeToken: (user)=>{
        var token = {
            login: user.login,
            email: user.email,
            password: user.password,
            controlSumm: hashUser(user)
        }
        token = JSON.stringify(token);
        return Buffer.from(token).toString("base64");
    },
    testToken: (token,callBack)=>{
/*
        userModel.find({password: token.password,login: token.login},(err,users)=>{
            if (err) return callBack("Ошибка соединения с базой");
            else if (users.length==0) return callBack("Пользователь не найден");
            else{
                let controlSumm = hashUser(user[0]);
                return callBack(null,token.controlSumm==controlSumm);
            }
        });
*/
    },
    hashUser: hashUser,
}