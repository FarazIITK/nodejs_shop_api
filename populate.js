require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/Product');

const productsJson = require('./products-data.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(productsJson);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}
start();


