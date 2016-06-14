'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../models/user');
// const ctrl = require('../controllers/user');

router
// .post('/user/create', ctrl.createUser)
// .get('/user/logout', ctrl.logout)
// .get('/user/checklogin', ctrl.checkLogin)
// .post('/user/:id',passport.authenticate('local'), ctrl.loginUser)
// .get('/user/:id', ctrl.myAccount)
// .put('/user/:id', ctrl.updateAcct)

module.exports = router;