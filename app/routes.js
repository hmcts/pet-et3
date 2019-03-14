const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/respondent-name', function(req, res) {
  const { rep } = req.session.data;

  if (rep === 'yes') {
    res.redirect('/your-name');
  }

  if (rep === 'no') {
    res.redirect('/respondent-name');
  }
});

module.exports = router
