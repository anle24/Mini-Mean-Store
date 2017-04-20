var mongoose = require('mongoose');

var Customer = mongoose.model('Customer');

var Order = mongoose.model('Order');

module.exports = {
  index: function(req, res) {
    Customer.find({}, function(err, customers) {
      if (err) {
        res.json(err)
      } else {
        res.json(customers);
      }
    })
  },
  create: function(req, res) {
    Customer.create(req.body, function(err, customer){
      if (err) {
        res.json(err)
      } else {
        res.json(customer);
      }
    });
  },
  delete: function(req, res) {
    console.log('server side customer delete');
    Order.remove({_customer: req.params.id}, function(err){
      if(err) {
        console.log('error removing customers orders')
      } else {
        Customer.remove({_id: req.params.id}, function(err, customers){
          if (err) {
            console.log('error removing customer')
          } else {
            return res.json(customers);
          }
        })
      }
    })
  }
}
  // recent: function(req, res) {
  //   Customer.find({}).sort('-created_at').limit(3).exec(function(err, results){
  //     res.json(results)
  //   })
  // },
  // delete: function(req, res) {
  //   Order.remove({ _customer: reqParams.id }, function(err){
  //     Customer.remove({_customer: reqParams.id}, function(err){
  //       if (err) {
  //         res.json(err);
  //       }
  //     })
  //   })
  // }
