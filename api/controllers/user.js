const mongoose = require('mongoose');
const users = mongoose.model('User');

class UserController{
  find(resquest, response){
    users
      .find({})
      .then(users => response.json(response))
      .catch(err => response.status(500).json(err));
  }
  get(resquest, response){
    users
      .findById(request.params.id)
      .then(user => {
        if(!user) throw new Error('User not found');

        response.json(user);
      })
      .catch(err => response.status(500).json(err));
  }
  create(resquest, response){
    users
      .create(resquest.body)
      .then(user => response.json(user))
      .catch(err => response.status(500).json(err));
  }
  update(resquest, response){
    users
      .findByIdAndUpdate(resquest.params.id, resquest.body)
      .then(user => response.json(user))
      .catch(err => response.status(500).json(err));
  }
  delete(resquest, response){
    users
      .remove({ _id: request.params.id })
      .then(() => response.sendStatus(204))
      .catch(err => response.status(500).json(err));
  }
}


module.exports = new UserController();