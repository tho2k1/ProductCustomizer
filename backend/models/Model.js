const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: true
    },
    price: {
      type: Number,
      minlength: 1,
      maxlength: 10,
      required: true
    },
    engines: {
        type: Array,
        minlength: 1,
        maxlength: 50,
        required: true
      },  
  });
  
  const Model = mongoose.model('model', modelSchema);
  
  module.exports = Model;