const mongoose = require('mongoose');

const StoriesSchema = new mongoose.Schema({
StoryName:{
type: String,
required: [true, 'Name can not be blank!']
} ,
 Markup: {
  type: String,
   },

}




)

module.exports = mongoose.model('story', StoriesSchema);