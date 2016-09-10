const mongoose = require('mongoose');
const users = mongoose.model('User');

class UserController{
  find(request, response){
    users
      .find({})
      .then(users => response.json(users))
      .catch(err => response.status(500).json(err));
  }
  get(request, response){
    users
      .findById(request.params.id)
      .then(user => {
        if(!user) throw new Error('User not found');

        response.json(user);
      })
      .catch(err => response.status(500).json(err));
  }
  create(request, response){
    users
      .create(request.body)
      .then(user => response.json(user))
      .catch(err => response.status(500).json(err));
  }
  update(request, response){
    users
      .findByIdAndUpdate(request.params.id, request.body)
      .then(user => response.json(user))
      .catch(err => response.status(500).json(err));
  }
  delete(request, response){
    users
      .remove({ _id: request.params.id })
      .then(() => response.sendStatus(204))
      .catch(err => response.status(500).json(err));
  }
}


module.exports = new UserController();