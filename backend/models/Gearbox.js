const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gearboxSchema = new Schema({
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
  });
  
  const Gearbox = mongoose.model('gearbox', gearboxSchema);
  
  module.exports = Gearbox;