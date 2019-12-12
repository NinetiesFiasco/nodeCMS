const MongoClient = require('mongodb').MongoClient;

module.exports = {
    enter: (data,callBack)=>{

        if (data.login.length==0)
            return callBack("Укажите логин");

        MongoClient.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true},(err,client)=>{
            const db = client.db("testUsers");
            const col = db.collection("users");
            
            col.findOne({login: data.login,password: data.password},(err,user)=>{

                if (!user)
                    return callBack('Неверный логин или пароль');

                return callBack(null,user);

            });
        });
    }
}