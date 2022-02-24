const express = require('express');
const Test = require('../models/test');
const router = express.Router();
const Completed = require('../models/people');

router.get('/',async (res,req)=>{
   const character=  await Completed.find({})
  console.log(character)
  req.render('home/test' ,{character})
  })

  router.get('/:id', async (req,res)=>{
   const {id} = req.params 
   const character = await Completed.findById(id);
   
   res.render('home/test' ,{character});
   
     })
router.post('/submit', async (req, res) => {
   try {
    const {LName, FName} = req.body;
    const test = new Test({
        FName,
        LName
     })
     await test.save();
   
      res.redirect('/test');
     
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
   }
});


module.exports = router;