const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/rep', function(req, res) {
  const { rep } = req.session.data;

  if (rep === 'yes') {
    res.redirect('/rep-details');
  }

  if (rep === 'no') {
    res.redirect('/contact-details');
  }
});

module.exports = router
