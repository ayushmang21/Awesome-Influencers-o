const mongoose = require('mongoose');

const url = "mongodb+srv://ayushman0021:wW4yEHTwB4Pbmriv@cluster0.2fykihf.mongodb.net/awesome-influencers?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('Connected to DB...!!!');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;