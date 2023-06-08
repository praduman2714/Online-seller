const express = require('express');
const port = 8000;
const app = express();

const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');

const db = require('./config/mongoose'); // require the database

// used for session cookies
const session = require("express-session");
const passport = require('passport');
const passportLocal = require('./config/passportLocal');


// Setting up view engine
app.set('view engine', 'ejs');
app.set('views' , './views');

app.use(expressLayout);
app.use(bodyParser.urlencoded({extended:false})); // since express does not have bodyPaser with it, so we have to download , and use it as middle ware

app.use(express.static('./assets'));

app.use(session({
    name: 'onlineSeller',
    // TODO change the secret before deployment in production mode
    secret: "praduman",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/' , require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log("Error in connecting to the server");
        return ;
    }
    console.log("Your code is up and running on port : " + port);
})
