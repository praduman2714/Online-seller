const mongooese = require('mongoose');

// mongooese.connect('mongodb://127.0.0.1/onlineSeller');
const DB = 'mongodb+srv://whiteWolf:praduman@cluster0.b05xxvb.mongodb.net/?retryWrites=true&w=majority';

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongooese.connect(DB).then(()=>{
    console.log('connection successful');
}).catch((err) => console.log("no connection " + err));

const db = mongooese.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open',function(){
    console.log('Successfully connected to the :: database')
})