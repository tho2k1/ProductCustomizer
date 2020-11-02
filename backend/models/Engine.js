const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const engineSchema = new Schema({
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
    gearboxes: {
        type: Array,
        minlength: 1,
        maxlength: 50,
        required: true
      },  
  });
  
  const Engine = mongoose.model('engine', engineSchema);
  
  module.exports = Engine;