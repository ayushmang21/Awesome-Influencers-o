const {model, Schema} = require('../connection');

const campaignSchema = new Schema({
    name: String,
    brand: String,
    description: String,
    image: {type: String, default: 'https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png'},
    createdOn: Date,
    lastDate: Date,
});

module.exports = model( 'campaigns', campaignSchema);