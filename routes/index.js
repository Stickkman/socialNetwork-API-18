// Routes Index

const router = require('express').Router(); 
const apiRoutes = require('./api'); // import route collection in api folder

router.use('/api', apiRoutes); // mount 'apiRoutes' on '/api'

router.use((req, res) => {
  return res.send('<h1> ❗ Undefined Route ❗ </h1>'); // notify if route does not exist
});

module.exports = router;
