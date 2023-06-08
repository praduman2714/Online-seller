const moongoose = require('mongoose');

const storeInfo = new moongoose.Schema({
    address : {
        type : "String",
        required : true
    },
    bussinessRef : {
        type : moongoose.Schema.Types.ObjectId,
        ref : 'Buisness'
    },
    gst : {
        type : "String",
        required : true
    },
    category : {
        type : "String",
        required : true
    }
},
    {
        timestamps : true
    }
);

const Store = moongoose.model('Store', storeInfo);

module.exports = Store;