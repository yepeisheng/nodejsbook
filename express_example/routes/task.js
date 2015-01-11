var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

console.log('Reach here1');
// Construct the schema.
console.log('Reach here2');

/* GET home page. */
router.get('/', function(req, res) {
  // Connect to the mongodb.
  mongoose.connect('mongodb://localhost/db',function(err){
    if (!err) {
      console.log('connected to MongoDB');
    } else {
      throw err;
    }
  });
  
  Task.find(function(err, docs){
    console.log(docs);
    res.end();
//    res.render('task/index', {
//      title: 'Todo index view',
//      docs: docs
//    });
  });
  
  mongoose.disconnect();
});

module.exports = router;
