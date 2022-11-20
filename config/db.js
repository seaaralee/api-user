const mongoose = require('mongoose');

const connectDB = async function main(){
    await mongoose.connect('mongodb://0.0.0.0:27017/praktekk4c');
    console.log('Database Connected')
}

module.exports = connectDB