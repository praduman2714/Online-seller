const express = require('express');
const port = 8000;
const app = express();

const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');

const db = require('./config/mongoose'); // require the database


// Setting up view engine
app.set('view engine', 'ejs');
app.set('views' , './views');

app.use(expressLayout);
app.use(bodyParser.urlencoded({extended:false})); // since express does not have bodyPaser with it, so we have to download , and use it as middle ware

app.use(express.static('./assets'));

app.use('/' , require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log("Error in connecting to the server");
        return ;
    }
    console.log("Your code is up and running on port : " + port);
})
