'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'
// const io = require('socket.io')()

// const db = require('./models/');

// const user = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;
// const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

// app.use(express.static('public'))
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));

// app.use(session({
//   secret: SESSION_SECRET,
//   store: new RedisStore({
//     url:REDIS_URL
//   }),
//   saveUninitialized: true,
//   resave: true,
//   httpOnly: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// require('./config/passport');

// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Server Running');
// });

//routes

// app.use(user);

// db.sequelize.sync().then(() => {
//   console.log("seqeulize.sync()");
// }).then(() => {
//   console.log(".then");
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});