const express = require('express');
const People = require('../models/people');
const router = express.Router();


router.get('/',async (res,req)=>{
   const character=  await People.find({})
  console.log(character)
  req.render('home/people' ,{character})
  })

router.post('/submit', async (req, res) => {
   try {
    const {fullname, RaceAlign,ArmorClass,HitPoints,Dexterity,Strength,Constitution
   ,Intelligence,Wisdom,Charisma,Speed
   } = req.body;
    const people = new People({
        fullname,
        RaceAlign,
        ArmorClass,
        HitPoints,
        Dexterity,
        Strength,
        Constitution,
        Intelligence,
        Wisdom,
        Charisma,
        Speed
     })
     await people.save();
   
      res.redirect('/people');
     
   } catch(e) {
      console.log(e);
      res.sendStatus(500);
   }
});


module.exports = router;