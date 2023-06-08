const Product = require('../model/products');
module.exports.home = async function(req, res){

    try {
        // Fetch all products from the database
        const products = await Product.find();
        
        return res.render('home', {
            title: 'Seller Online',
            products: products // Pass the fetched products to the view
        });
    } catch (err) {
        console.error('Error in fetching products:', err);
        return res.render('home', {
            title: 'Seller Online',
            products: [] // If an error occurs, pass an empty array to the view
        });
    }
}