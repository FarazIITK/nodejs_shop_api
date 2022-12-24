const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({});
    return res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
    return res.status(200).json({ msg: 'Testing products route' });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}