  
//const pool = require("../../config/database");

function doSomething(data){
    data.serverVal = "The server has handled this";
    return data;
}

module.exports = {
    register: (data,callBack)=>{
        data = doSomething(data);
        callBack(null,data);
    }
}