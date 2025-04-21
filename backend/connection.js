const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

mongoose.connect(url)
.then((result) => {
    console.log('Connected to DB...!!!');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;