const router = require('express').Router();
const apiRoutes = require('./api');

// we define all routes in the api directory with '/api'
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;