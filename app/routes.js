const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/respondent-name', function(req, res) {
  console.log("Routing rep-decisioner");
  const { rep } = req.session.data;

  if (rep === 'yes') {
    res.redirect('/contact');
  }

  if (rep === 'no') {
    res.redirect('/respondent-name');
  }
});

module.exports = router
