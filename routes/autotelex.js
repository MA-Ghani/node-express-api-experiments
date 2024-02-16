const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const AutoTelexController = require('../controllers/autotelex');


// a simple test url to check that all of our files are communicating correctly.


router.post('/create', AutoTelexController.AutoTelexHook);

module.exports = router;