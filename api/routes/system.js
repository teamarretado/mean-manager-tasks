module.exports = (app) => {
  const authentication = app.controllers.authentication;
  const controller = app.controllers.system;

  
  app.route('/v1/systems')
    .all(authentication.verify)
    .get(controller.find)
    .post(controller.create);

  app.route('/v1/systems/:id')
    .all(authentication.verify)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);
}