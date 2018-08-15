var express = require('express');
    router = express.Router();
    mongojs = require('mongojs');

// Get All Tasks
router.get('/tasks', function(req,res,next){
  db.tasks.find(function(err,tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});
// Get Single Tasks


module.exports = router;
