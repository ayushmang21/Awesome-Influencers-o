const {model, Schema} = require('../connection');

const influSchema = new Schema({
    firstName: String,
    lastName: String,
    phone : Number,
    email: String,
    password: String,
    pfp: {type: String, default: 'https://static.vecteezy.com/system/resources/previews/022/123/337/large_2x/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg'},
});

module.exports = model( 'influencers', influSchema);