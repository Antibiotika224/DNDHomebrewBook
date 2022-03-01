const express = require('express');
const router = express.Router();


router.get('/',async (res,req)=>{

  req.render('home/test')
  })

module.exports = router;