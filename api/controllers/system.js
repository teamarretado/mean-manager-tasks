const mongoose = require('mongoose');
const systems = mongoose.model('System');

class SystemController{
  find(request, response){
    systems
      .find({})     
      .then(datas => response.json(datas))
      .catch(err => response.status(500).json(err));    
  }
  get(request, response){
    systems
      .findById(request.params.id)
      .then(system => {
        if(!system) throw new Error('System not found');

        response.json(system);
      })
      .catch(err => response.status(500).json(err));
  }
  create(request, response){
    systems
      .create(request.body)
      .then(system => response.json(system))
      .catch(err => response.status(500).json(err));
  }
  update(request, response){
    systems
      .findByIdAndUpdate(request.params.id, request.body)
      .then(system => response.json(system))
      .catch(err => response.status(500).json(err));
  }
  delete(request, response){
    systems
      .remove({ _id: request.params.id })
      .then(foto => response.sendStatus(204))
      .catch(err => response.status(500).json(err));
  }
}


module.exports = new SystemController();