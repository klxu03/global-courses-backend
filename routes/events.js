const eventRoutes = (app, fs) => {
  const dataPath = './data/events.json';

  app.get('/events', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/events/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const id = Number(req.params.id);
      const events = JSON.parse(data);
      const event = events.find((event) => event.id === id);
      res.send(event);
    });
  });
};

module.exports = eventRoutes;
