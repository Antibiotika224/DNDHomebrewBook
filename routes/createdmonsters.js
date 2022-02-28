const express = require('express');

const router = express.Router();
const Monster = require('../models/monsters');

router.get('/',async (res,req)=>{
   const monster=  await Monster.find({})
  console.log(Monster)
  req.render('home/createdmonsters' ,{monster})
  })

  router.get('/:id', async (req,res)=>{
   const {id} = req.params 
   const monster = await Monster.findById(id);
   
   res.render('home/createdmonsters' ,{monster});
   
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