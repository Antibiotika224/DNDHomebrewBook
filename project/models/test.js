const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
 FName: {
      type: String,
      required: [true, 'Name can not be blank!']
   },
   LName: {
      type: String,
      required: [true, 'Last Name can not be blank!']
   }
})

module.exports = mongoose.model('test', testSchema);