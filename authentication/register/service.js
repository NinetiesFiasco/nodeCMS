  
//const pool = require("../../config/database");
const userModel = require("./model");

module.exports = {
    create: (data)=>{
    },
    register: (data,callBack)=>{
        var user = userModel.create(data);
        return callBack(null,user);
    }
}