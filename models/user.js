const mongoose = require('mongoose');
const shema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('User', shema)