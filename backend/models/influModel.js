const {model, Schema} = require('../connection');

const influSchema = new Schema({
    firstName: String,
    lastName: String,
    phone : Number,
    email: String,
    password: String,
    // avatar: {type: String, default: ''},
});

module.exports = model( 'influencers', influSchema);