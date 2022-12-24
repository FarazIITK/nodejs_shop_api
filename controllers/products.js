const Product = require('../models/Product');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({});
    return res.status(200).json({ products, nbHits: products.length });
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = {
            $regex: name,
            $options: 'i'
        };
    }

    let result = Product.find(queryObject);

    // For sorting
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt')
    }

    // For partial response
    if (fields) {
        const fieldsList = fields.split(',').join(' ');
        result.select(fieldsList)
    }

    const products = await result;

    return res.status(200).json({ products, nbHits: products.length });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}