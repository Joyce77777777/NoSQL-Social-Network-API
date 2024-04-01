// Importing required packages
const express = require('express');

// Importing database configuration and routes
const db = require('./config/connection');
const routes = require('./routes');

// Setting up the Express app
const app = express();
// Port configuration for the server to listen on
const PORT = process.env.PORT || 3001;

// Middleware for parsing URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Integrating the routes defined in the routes directory
app.use(routes);

// Establishing database connection and starting the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
