require('dotenv').config();
const express = require('express');
const app = express();

const {Page} = require('./page.js');
const registerRouter = require('./authentication/register/router.js');
const enterRouter = require('./authentication/enter/router.js');

app.use(express.static(__dirname + "/production"));

app.use(express.json());

app.use('/register',registerRouter); 
app.use('/enter',enterRouter);

app.get('/data', (req,res)=>{
    res.send('anyData');
});

app.get('/', function (req, res) {
    res.send(Page);
});

app.listen(process.env.APP_PORT,()=>{
    console.log("Server pashet on "+process.env.APP_PORT);
}); 