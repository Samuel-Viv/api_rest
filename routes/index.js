var express = require('express');
var router = express.Router();

const userRoute = require('../routes/users');
const fileRoute = require('../routes/files');

router.get('/', async(req, res) => {
  // res.status(200).json({
  //   name : process.env.APP_NAME,
  //   version: '1.0',
  //   status: 200,
  //   message: 'Bienvenue sur l\'API !'
  // })
  res.render('index',{
    title: 'Accueil'
  })
});

router.use('/users', userRoute);
router.use('/files', fileRoute);

module.exports = router;
