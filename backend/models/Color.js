const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorSchema = new Schema({
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
    value: {
        type: String,
        length: 7,
        required: true
      },  
  });
  
  const Color = mongoose.model('color', colorSchema);
  
  module.exports = Color;