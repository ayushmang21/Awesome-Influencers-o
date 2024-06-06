const {model, Schema} = require('../connection');

const enrollSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    campaign: String,
    enrolledOn: Date,
});

module.exports = model( 'enrolls', enrollSchema);