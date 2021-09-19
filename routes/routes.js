const eventRoutes = require('./events');
const courseRoutes = require('./course');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('welcome to the developmental api-server');
  });

  eventRoutes(app, fs);
  courseRoutes(app, fs);
};

module.exports = appRouter;
