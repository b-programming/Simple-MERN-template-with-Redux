const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//import product routes
const product = require('./routes/product.route');
const app = express();
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://<User>:<Password>@productstutorial-ur2qd.mongodb.net/test?retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
//new parser for future compatibility
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//json parsing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//home url and port binding
app.use('/products', product);
let port = 5000;
//server start response
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
