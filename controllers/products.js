const getAllProductsStatic = async (req, res) => {
    return res.status(200).json({ msg: 'Testing static products route' });
}

const getAllProducts = async (req, res) => {
    return res.status(200).json({ msg: 'Testing products route' });
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}