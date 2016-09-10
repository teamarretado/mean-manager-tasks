module.exports = (app) => {
  const controller = app.controllers.system;

  app.route('/v1/systems')
    .get(controller.find)
    .post(controller.create);

  app.route('/v1/systems/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);
}