const Buisness = require('../model/buisness');

module.exports.singUP = function(req, res){
    return res.render('SignUp', {
        title: 'Seller-Online || Sign-UP'
    });
}

module.exports.signIN = function(req, res){
    return res.render('SignIN', {
        title : 'Seller-Onlinee || Sign-IN'
    })
}

module.exports.createBuisness = async function(req, res){
    // console.log("Making Buisness");
    if(req.body.password != req.body.confirmPassword){
        // console.log("In this para");
        return res.redirect('back');
    }
    let buisness = await Buisness.findOne({email : req.body.email});
    // console.log(buisness);
    if(!buisness){
        await Buisness.create(req.body);
        return res.redirect('/users/singIn');
    }
    return res.redirect('back');
}

module.exports.createSession = async function(req, res){
    const business = await Buisness.findOne({email : req.body.email});
    // console.log(req.password + " " + business.password);
    if(req.body.password !== business.password ){
        // console.log("Here");
        return res.redirect('back');
    }
    return res.redirect('/');
}

// module.exports.singUP
