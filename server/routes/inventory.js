'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/inventory');
const ctrl = require('../controllers/inventory');

router
.post('/inventory/create', ctrl.addItem)

module.exports = router;