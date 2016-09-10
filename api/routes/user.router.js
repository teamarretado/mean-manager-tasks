module.exports = (app) => {
  const controller = app.controller.user;

  app.route('/v1/users')
    .get(controller.find)
    .post(controller.create);

  app.route('/v1/users/:id')
    .get(controller.get)
    .put(controller.update)
    .patch(controller.patch)
    .delete(controller.delete);
}