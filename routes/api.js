'use strict';

// LOAD LIBS
const router = require('express').Router();

// LOAD SCRIPTS
const streaming = require('./api/streaming');

// ROUTES
router.use('/streaming', streaming);

module.exports = router;
