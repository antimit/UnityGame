const express = require('express');
const http = require('http');
const path = require('path');
const { PORT } = require('./config/serverConfig');
const setupStaticRoutes = require('./routes/staticRoutes');

const app = express();

// Serve static files (e.g., build/, index.html, etc.)
app.use(express.static(path.join(__dirname, '/')));

// Setup routes
setupStaticRoutes(app);

// Create and start server
http.createServer(app).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
