module.exports = (app) => {
  const controller = app.controllers.authentication;

  app.post('/v1/login', controller.sign);
  // app.use('/*', controller.verify);
}