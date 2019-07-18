const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema setup(maping db data)
let LoginSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  password: {
    type: String,
    required: true,
    max:100
  },
  email: {
    type: String,
    required: true,
    max:100
  },
  v: {
    type: Number,
    required: true
  }
});


// Export the model
module.exports = mongoose.model('Login', LoginSchema);