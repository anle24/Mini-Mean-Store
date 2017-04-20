var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {
  index: function(req, res){
    Product.find({}, function(err, products){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(products);
    	}
    });
  },
  create: function(req, res){
    console.log('PRODUCT SERVER CONTROLLER!!!!');
    Product.create(req.body, function(err){
      if (err) { return res.json(err); }
      return res.json(true);
    })
  },

  delete: function(req, res) {
    Product.remove({_id: req.params.id}, function(err){
      if (err) {
        return res.json(err);
      }
      return res.json(true);
    })
  }
}
