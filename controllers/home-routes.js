const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {loggedIn: req.session.loggedIn});
  });

module.exports = router;