const express = require('express');

const router = express.Router();
const Completed = require('../models/people');

router.get('/',async (res,req)=>{
   const character=  await Completed.find({})
  console.log(character)
  req.render('home/created' ,{character})
  })

  router.get('/:id', async (req,res)=>{
   const {id} = req.params 
   const character = await Completed.findById(id);
   
   res.render('home/created' ,{character});
   
     })

  


module.exports = router;