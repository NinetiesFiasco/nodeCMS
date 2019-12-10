const userModel = require("../user/model");

const md5 = require('md5');

module.exports = {    
    testToken: (token,callBack)=>{
        userModel.find({password: token.password,login: token.login},(err,users)=>{
            if (err)
                return callBack("Ошибка соединения с базой");
            else if (users.length==0)
                return callBack("Пользователь не найден");
            else{
                
                let controlSumm = md5(users[0].password+process.env.TOKEN_SECRET+users[0].login+users[0].email)

                return callBack(null,token.controlSumm==controlSumm);
            }
        });
    }
}