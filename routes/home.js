const express = require('express');

const router = express.Router();
const Completed = require('../models/people');
const Monster = require('../models/monsters');

router.get('/',async (res,req)=>{
   const character=  await Completed.find({})
   const monster=  await Monster.find({})
  console.log(Monster)
  req.render('home/home' ,{character,monster})
  })

  router.get('/:id', async (req,res)=>{
   const {id} = req.params 
   const character = await Completed.findById(id);
   const monster = await Monster.findById(id);
   res.render('home/created' ,{character,monster});
   
     })
router.post('/submit', async (req, res) => {
//    try {
//     const {LName, FName} = req.body;
//     const test = new Test({
//         FName,
//         LName
//      })
//      await test.save();
   
//       res.redirect('/test');
     
//    } catch(e) {
//       console.log(e);
//       res.sendStatus(500);
//    }
});


module.exports = router;