  
const userModel = require("../user/model");

function testUserErr(data,callBack){
    let message = "";
    if (data.login.length<4)
        message = "Логин слишком короткий";
    else if(userModel.find({login: data.login}).toArray().length>0)
        message = "Логин занят";    
    else if (userModel.find({email: data.email}).toArray().length>0)
        message = "Email Занят";
    return {
        success: message==""?1:0,
        message: message
    };
}

module.exports = {
    register: (data,callBack)=>{
        var test = testUserErr(data);
        if (test.success==0)
            return test;
        
        var user = userModel.create(data);
        return callBack(null,user);
    }
}