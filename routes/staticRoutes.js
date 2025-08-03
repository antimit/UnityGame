const path = require('path');

function setupStaticRoutes(app) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });
}

module.exports = setupStaticRoutes;
