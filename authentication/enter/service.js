const userModel = require("../user/model");

module.exports = {
    enter: (data,callBack)=>{
        userModel.find({password: data.password,login: data.login},(err,users)=>{
            if (err)
                return callBack("Ошибка соединения с базой");
            else if (users.length==0)
                return callBack("Пользователь не найден");
            else{                
                return callBack(null,users[0]);
            }
        });
    }
}