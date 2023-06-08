const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    bussinessRef : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Buisness'
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    MRP: {
      type: Number,
      required: true,
    },
    SP: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
