const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;


module.exports = {
    register: (data,callBack)=>{

        if (data.login.length<4)
            return callBack({success:0,message:"Логин слишком короткий"});

        MongoClient.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true},(err,client)=>{
            const db = client.db("testUsers");
            const col = db.collection("users");
            
            col.findOne({$or : [{login: data.login},{email: data.email}]},(err,user)=>{

                if (user)
                    return callBack('Логин или email занфт или и то и то');
                

                col.insertOne(data,(err,result)=>{                    
                    if (err) return callBack('myErr:' + err);                    

                    return callBack(null,result.ops[0]);
                });
            });
        });   
    }
}