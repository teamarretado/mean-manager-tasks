const mongoose = require('mongoose');
const users = mongoose.model('User');
const jwt = require('jsonwebtoken');
const secret = 'teamarretado-fast';

class AuthenticationController{

  sign(request, response){
    users
      .findOne({ email: '', password: ''})
      .then(user => {
        if(!user) reponse.status(401).json('is not authentication');

        delete user.password;
        const token = jwt.sing(user, secret, () => {
          response.headers['x-access-token'] = token;
          response.sendStatus(200).end();
        }) 
      }) 
      .catch(err => response.status(500).json(err));
  }

  verify(request, response, next){
    const token = request.headers['x-access-token'];
    if(token && jwt.verify(token, secret)) next();  
    else response.status(401).json('is not authentication');
  }

}

module.exports = new AuthenticationController();