const classRoutes = (app, fs) => {
  const dataPath = './data/course.json';

  const saveClasses = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
  };

  const getClasses = () => {
    console.log('Does this even exist?');
    let ret = fs.readFileSync(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
    });
    return ret;
  };

  app.get('/course', (req, res) => {
    res.send(getClasses());
  });

  app.get('/course/:id', (req, res) => {
    console.log('Trying to find a single course');
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const id = String(req.params.id);
      console.log('id', id);
      const courses = JSON.parse(data).courses;
      console.log('courses', courses);
      const course = courses.find((course) => course.courseId === id);
      console.log('course', course);
      res.send(course);
    });
  });

  app.post('/course', (req, res) => {
    let currentClasses = JSON.parse(getClasses());
    console.log('currentClasses.courses', currentClasses.courses);

    console.log('req.body', req.body);
    const newClass = req.body;
    currentClasses.courses.push(newClass);

    saveClasses(currentClasses);
    res.send({ success: true, msg: 'Class successfully added' });
  });
};

module.exports = classRoutes;
