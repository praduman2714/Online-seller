const Product = require('../model/products');

module.exports.addInventory = function (req, res){
    return res.render('addInventory', {
        title : 'Online Seller || Add Inventory'
    })
}


module.exports.addProduct = async function(req, res) {
    // console.log(req.user);
  try {
    // Extract the data from the request body
    const { bussinessRef, category, subCategory, productName, MRP, SP, quantity, images } = req.body;

    // Create a new product object
    const newProduct = new Product({
      bussinessRef : req.user._id,
      category,
      subCategory,
      productName,
      MRP,
      SP,
      quantity,
      images
    });

    // Save the product to the database
    await newProduct.save();

    return res.redirect('/'); // Redirect to the desired page after adding the product
  } catch (err) {
    console.error('Error in adding product:', err);
    return res.redirect('back');
  }
};
