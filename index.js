const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys')
require('./models/User');
require('./services/passport');

// Set up Database
mongoose.connect(keys.mongoURI);

const app = express();

// Body parser & Cookie parser
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //Last for 30 days
    keys: [keys.cookieKey]
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Serve up static files
  app.use(express.static('client/build'));

  // Serve up the index.html
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
};

// Start listening!
const PORT = process.env.PORT || 5000;
app.listen(PORT);