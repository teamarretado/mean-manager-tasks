module.exports = (app) => {
  const controller = app.controller.task;

  app.route('/v1/tasks')
    .get(controller.find)
    .post(controller.create);

  app.route('/v1/tasks/:id')
    .get(controller.get)
    .put(controller.update)
    .patch(controller.patch)
    .delete(controller.delete);
}