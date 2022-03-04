const express = require('express');

const router = express.Router();
const Completed = require('../models/people');
const Monster = require('../models/monsters');
const Story = require('../models/stories');


router.get('/',async (res,req)=>{
   const character=  await Completed.find({})
   const monster=  await Monster.find({})
   const story = await Story.find({});

  req.render('home/home' ,{character,monster,story})
  })

  router.get('/:id', async (req,res)=>{
   const {id} = req.params 
   const character = await Completed.findById(id);
   const monster = await Monster.findById(id);
   const story = await Story.findById(id);
   res.render('home/created' ,{character,monster,story});
   
     })
     router.get('/:id', async (req,res)=>{
      const {id} = req.params 
      const story = await Story.findById(id);
      res.render('home/createdstory' ,{story});
      
        })

 




module.exports = router;