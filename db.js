const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://imtiyezbensalah:imtiyez123@food.wmqboqg.mongodb.net/';

mongoose.connect(mongoURL, { useNewUrlParser: true , useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', (err) => {
    console.error('Mongo DB Connection failed', err);
});

db.once('open', () => {
    console.log('Mongo DB Connection Successful');
});

module.exports = mongoose;
