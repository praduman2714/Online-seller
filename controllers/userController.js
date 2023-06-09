const Buisness = require('../model/buisness');
const Store = require('../model/store');
const Product = require('../model/products');

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

module.exports.storeInfo = async function(req, res){
    const storeUser = await Store.findOne({ bussinessRef: req.user._id });
    console.log(storeUser);
    if(storeUser){
        return res.redirect('/');
    }
    return res.render('storeInfo' , {
        title : 'Online Seller || Store Info'
    })
}

module.exports.store = async function (req, res) {
    try {
        console.log(req.user);
      const storeData = {
        address: req.body.address,
        bussinessRef: req.user._id, // Assuming the user ID is stored in req.user._id after authentication
        gst: req.body.gst,
        category: req.body.category,
      };

    //   console.log(storeData);
  
      // Create a new Store record
      await Store.create(storeData);
  
      return res.redirect('/'); // Redirect to the desired page after storing the information
    } catch (err) {
      console.error('Error in creating store:', err);
      return res.redirect('back');
    }
  };
  

module.exports.createSession = async function(req, res){
    
    return res.redirect('/users/storeInfo');
}

// module.exports.singUP

// Used for logout 
module.exports.destroySession = function(req, res, done){
    // req.flash('success' , 'Logged Out');
    req.logout((err) => {
        if (err) {
            return done(err);
        }
    })
    return res.redirect('/users/singIn');
    
    
}


module.exports.shop = async function(req, res) {
    try {
        const uniqueId = req.params.uniqueId;
        console.log(uniqueId);

        const products = await Product.find({ bussinessRef: uniqueId });
        const store = await Store.findOne({ bussinessRef: uniqueId });
        
        return res.render('shop', {
            title: 'Online Seller || Shop',
            products: products,
            store : store
        });
    } catch (err) {
        console.error('Error in fetching user products:', err);
        
    }
};

