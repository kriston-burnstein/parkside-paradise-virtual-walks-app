// Required modules for main route testing
// Setting up an environment that mimics the application's deployment configuration
const request = require('supertest');
const express = require('express');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require('mongoose');
const flash = require('express-flash');
const { MongoMemoryServer } = require('mongodb-memory-server');
const router = require('../routes/main');

describe('Main Routes', () => {
  let app;
  let mongoServer;

  // Before running the tests, set up an in-memory MongoDB instance and the Express app
  beforeAll(async () => {
    // Create an in-memory MongoDB server instance
    mongoServer = await MongoMemoryServer.create();
    const mockMongoDBUri = await mongoServer.getUri();

    // Connect to the in-memory MongoDB instance using Mongoose
    await mongoose.connect(mockMongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create an Express app instance
    app = express();
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(
      session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
      })
    );
    app.use(flash());
    app.use((req, res, next) => {
      req.user = null; // Mimic a not-logged-in user
      next();
    });
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(router); // Use existing router in the Express app
  });

  // After running the tests, stop the in-memory MongoDB instance and close the Mongoose connection
  afterAll(async () => {
    await mongoServer.stop();
    await mongoose.connection.close();
  });

  // Test the home page, expecting a 200 OK response
  it('should return 200 OK for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // Test the get-started page, expecting a 200 OK response
  it('should return 200 OK for GET /get-started', async () => {
    const response = await request(app).get('/get-started');
    expect(response.status).toBe(200);
  });

  // Test the login page, expecting a 200 OK response for a not logged-in user
  it('should return 200 OK for GET /login', async () => {
    const response = await request(app).get('/login');
    expect(response.status).toBe(200);
  });

  // Test the signup page, expecting a 200 OK response for a not logged-in user
  it('should return 200 OK for GET /signup', async () => {
    const response = await request(app).get('/signup');
    expect(response.status).toBe(200);
  });

  // TODO: Add authentication tests for /login and /signup routes for logged-in users
  // These tests should cover the scenarios when users are already authenticated and try to access the login/signup pages, which results in a redirect.

  // Test for a route that does not exist, expecting a 404 Not Found response
  it('should return 404 for GET /this-route-does-not-exist', async () => {
    const response = await request(app).get('/this-route-does-not-exist');
    expect(response.status).toBe(404);
  });
});
