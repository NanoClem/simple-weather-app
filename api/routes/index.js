// MODULES
const router = require('express').Router();
const controller = require('../controllers');

// Demo route
router.get('/', (req, res) => {
    controller.welcome(req, res);
});


// EXPORTS
module.exports = router;