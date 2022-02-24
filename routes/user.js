const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   try {
      res.render('userPages/index');
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
   }
});
router.get('/page2', (req, res) => {
   try {
      res.send('User PAGE 2');
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
   }
});
router.get('/page3', (req, res) => {
   try {
      res.send('User PAGE 3');
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
   }
});

module.exports = router;