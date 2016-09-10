const mongoose = require('mongoose');
const tasks =  mongoose.model('Task')

class TaskController{
  find(resquest, response){
    tasks
      .find({})
      .then(datas => response.json(datas))
      .catch(err => response.status(500).json(err)); 
  }
  get(resquest, response){
    tasks
      .findById(request.params.id)
      .then(task => {
        if(!task) throw new Error('Task not found');

        response.json(task);
      })
      .catch(err => response.status(500).json(err));
  }
  create(resquest, response){
    tasks
      .create(resquest.body)
      .then(task => response.json(task))
      .catch(err => response.status(500).json(err));
  }
  update(resquest, response){
    tasks
      .findByIdAndUpdate(resquest.params.id, resquest.body)
      .then(task => response.json(task))
      .catch(err => response.status(500).json(err));
  }
  delete(resquest, response){
    tasks
      .remove({ _id: request.params.id })
      .then(task => response.sendStatus(204))
      .catch(err => response.status(500).json(err));
  }
}


module.exports = new TaskController();