const mongoose = require('mongoose');

// To remove deprecation warning
mongoose.set('strictQuery', true);

const connectDB = (connectionString) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB;