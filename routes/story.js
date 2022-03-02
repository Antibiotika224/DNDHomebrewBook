const express = require('express');
const Story = require('../models/stories');
const router = express.Router();


router.get('/',async (res,req)=>{

  req.render('home/story')
  })

module.exports = router;


router.post('/submit', async (req, res) => {
  try {
   const {Markup,StoryName
  } = req.body;
   const story = new Story({
    Markup,StoryName
        
    })
    await story.save();
res.redirect('/home')
    
    
  } catch(e) {
     console.log(e);
     res.sendStatus(500);
  }
});
