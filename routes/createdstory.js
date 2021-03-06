const express = require('express');
const { redirect } = require('express/lib/response');
const MethodOveride = require('method-override')
const router = express.Router();
const Story = require('../models/stories');
router.use(MethodOveride('_method'))


router.get('/',async (res,req)=>{
   const story=  await Story.find({})
  console.log(story)
  req.render('home/createdstory' ,{story})
  })

  router.get('/:id', async (req,res)=>{ 
   const {id} = req.params 
   const story = await Story.findById(id);
   
   res.render('home/createdstory' ,{story});
   
     })


router.put('/:id',async(req,res)=>{
  const {id} = req.params 
const story = await Story.findByIdAndUpdate(id, req.body, {runValidators: true})
res.redirect(story._id)
})

router.delete('/:id',async(req,res)=>{
  const {id} = req.params 

const destroy = await Story.findByIdAndDelete(id)
res.redirect('/home')
})



module.exports = router;