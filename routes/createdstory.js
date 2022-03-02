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
Story.findByIdAndUpdate(id, req.body, {runValidators: true})

console.log(req.body)
res.send("YES")
}


)


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