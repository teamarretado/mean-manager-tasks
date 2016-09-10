module.exports = (app) => {
  const authentication = app.controllers.authentication;
  const controller = app.controllers.task;

  app.route('/v1/tasks')
    .all(authentication.verify)
    .get(controller.find)
    .post(controller.create);

  app.route('/v1/tasks/:id')
    .all(authentication.verify)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);
}