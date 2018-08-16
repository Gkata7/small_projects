var express = require('express');
    router = express.Router();
    mongojs = require('mongojs');
    db = mongojs('mongodb://Garrett:garrett1@ds121262.mlab.com:21262/task_list_garrett', ['tasks']);

// Get All Tasks
router.get('/tasks', function(req,res,next){
  db.tasks.find(function(err,tasks){
    if(err){
      res.send(err);
    }
    res.json(tasks);
  });
});
// Get Single Task
router.get('/task/:id', function(req,res,next){
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});
// Save Task
router.post('/task', function(req,res,next){
  var task = req.body;
  if(!task.title || (task.isDone + '')){
    res.status(400);
    res.json({
      'error' : 'Bad Data'
    });
  } else {
    db.tasks.save(task,function(err,task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});
// Delete Task
router.delete('/task/:id', function(req,res,next){
  db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err,task){
    if(err){
      res.send(err);
    }
    res.json(task);
  });
});
// Update Task
router.put('/task/:id', function(req,res,next){
  var task = req.body;
  var updateTask = {};
  if(task.isDone){
    updateTask.isDone = task.isDone;
  }
  if(task.title){
    updateTask.title = task.title;
  }
  if(!updateTask){
    res.status(400);
    res.json({
      'error' : 'Bad Data'
    });
  } else {
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updateTask, {}, function(err,task){
      if(err){
        res.send(err);
      }
      res.json(task);
    });
  }
});


module.exports = router;
