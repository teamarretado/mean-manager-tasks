const mongoose = require('mongoose');
const tasks =  mongoose.model('Task')

class TaskController{
  find(request, response){
    tasks
      .find({})
      .populate('requester')
      .populate('responsibles')
      .then(datas => response.json(datas))
      .catch(err => response.status(500).json(err)); 
  }
  get(request, response){
    tasks
      .findById(request.params.id)
      .populate('requester')
      .populate('responsibles')
      .then(task => {
        if(!task) throw new Error('Task not found');

        response.json(task);
      })
      .catch(err => response.status(500).json(err));
  }
  create(request, response){
    tasks
      .create(request.body)
      .then(task => response.json(task))
      .catch(err => response.status(500).json(err));
  }
  update(request, response){
    tasks
      .findByIdAndUpdate(request.params.id, request.body)
      .then(task => response.json(task))
      .catch(err => response.status(500).json(err));
  }
  delete(request, response){
    tasks
      .remove({ _id: request.params.id })
      .then(task => response.sendStatus(204))
      .catch(err => response.status(500).json(err));
  }
}


module.exports = new TaskController();