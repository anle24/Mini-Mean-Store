var mongoose = require('mongoose');

var Order = mongoose.model('Order');

var Product = mongoose.model('Product');

module.exports = {
  index: function(req, res) {
    console.log('server side orders');
    Order.find({})
      .populate('_customer _product')
      .exec(function(err, orders){
        if (err) {
          res.json(err);
        } else {
          res.json(orders);
        }
      })
  },

  create: function(req, res) {
    var orderQty = req.body.quantity;
    var productQty = req.body._product.quantity;

    console.log('---server side order CREATE');
    console.log('REQ BODY', req.body);
    console.log('ORDER QUANTITY', req.body.quantity);
    console.log('PRODUCT OBJECT', req.body._product);
    console.log('PRODUCT NAME', req.body._product.name);
    console.log('PRODUCT QUANTITY', req.body._product.quantity);
    if (orderQty <= 0 || productQty - orderQty < 0) {
      console.log('order quantity larger than product quantity!');
      return res.json(false);
    }

    if (productQty >= orderQty) {
      Product.findOneAndUpdate({_id: req.body._product._id}, {$set: {quantity: (productQty - orderQty)}}, function(err, product){
        Order.create(req.body, function(err, result){
          console.log('creating!!!');
          if (err) {
            console.log('SERVER ORDER ERROR');
            res.json(err);
          } else {
            console.log(req.body._product.quantity)
            console.log('added new order')
            res.json(result);
          }
        })
      })
    } else {
      return res.json(false);
    }
  }
}
