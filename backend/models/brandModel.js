const e = require('cors');
const {model, Schema} = require('../connection');

const brandSchema = new Schema({
    brandName: String,
    logo: {type: String, default: 'https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png'},
    description: String,
    tagline: String,
    email: String,
    password: String,
});

module.exports = model( 'brands', brandSchema);