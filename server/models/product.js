var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  img: {type: String, required: true},
  description: {type: String, required: true},
  quantity: {type: Number, default: 50}
}, {timestamps: true});

var Product = mongoose.model('Product', ProductSchema);
