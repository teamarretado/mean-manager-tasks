module.exports = (app) => {
  const authentication = app.controllers.authentication;
  const controller = app.controllers.user;

  app.route('/v1/users')
    .get(authentication.verify)
    .get(controller.find)
    .post(controller.create);

  app.route('/v1/users/:id')
    .all(authentication.verify)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);
}