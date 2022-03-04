const express = require('express');

const router = express.Router();
const Completed = require('../models/people');

router.get('/',async (res,req)=>{
   const character=  await Completed.find({})
  console.log(character)
  req.render('home/editcharacter' ,{character})
  })

  router.get('/:id', async (req,res)=>{
   const {id} = req.params 
   const character = await Completed.findById(id);
   
   res.render('home/editcharacter' ,{character});
   
     })

     router.delete('/:id',async(req,res)=>{
      const {id} = req.params 
    const destroy = await Completed.findByIdAndDelete(id)
    res.redirect('/editcharacter')
    })

    router.put('/:id',async(req,res)=>{
        res.send("YESY")
    }
    
    )
   
    // router.put('/:id',async(req,res)=>{
    //     const {id} = req.params 
    //     res.send("WERK")
    // //     const {id} = req.params 
    // //   const character = await Completed.findByIdAndUpdate(id, req.body, {runValidators: true})
    // //   res.redirect(character._id)
    //   })


module.exports = router;