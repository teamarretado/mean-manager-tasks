const mongoose = require('mongoose');
const systems = mongoose.model('System');

class SystemController{
  find(resquest, response){
    systems
      .find({})
      .populate('requester')
      .populate('responsibles')
      .then(datas => response.json(datas))
      .catch(err => response.status(500).json(err));    
  }
  get(resquest, response){
    systems
      .findById(request.params.id)
      .populate('requester')
      .populate('responsibles')
      .then(system => {
        if(!system) throw new Error('System not found');

        response.json(system);
      })
      .catch(err => response.status(500).json(err));
  }
  create(resquest, response){
    systems
      .create(resquest.body)
      .then(system => response.json(system))
      .catch(err => response.status(500).json(err));
  }
  update(resquest, response){
    systems
      .findByIdAndUpdate(resquest.params.id, resquest.body)
      .then(system => response.json(system))
      .catch(err => response.status(500).json(err));
  }
  delete(resquest, response){
    systems
      .remove({ _id: request.params.id })
      .then(foto => response.sendStatus(204))
      .catch(err => response.status(500).json(err));
  }
}


module.exports = new SystemController();