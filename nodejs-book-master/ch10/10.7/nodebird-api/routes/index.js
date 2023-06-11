const express = require('express');
const { renderLogin, createDomain } = require('../controllers');
const { isLoggedIn } = require('../middlewares');

const router = express.Router();

router.get('/', renderLogin);

router.post('/domain', isLoggedIn, createDomain);

module.exports = router;

exports.renderMain = (req, res) => {
    res.render('main', {key:ProcessingInstruction.env.CLIENT_SECRET});
};