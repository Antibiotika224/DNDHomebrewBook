const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
   fullname: {
      type: String,
     
   },
   RaceAlign: {
      type: String,
     
   },
   ArmorClass: {
      type: String,
     
   },
   HitPoints: {
      type: String,
     
   },
   Strength: {
      type: String,
     
   },
   Dexterity: {
      type: String,
     
   },
   Constitution: {
      type: String,
     
   },
   Intelligence: {
      type: String,
     
   },
   Wisdom: {
      type: String,
     
   },
   Charisma: {
      type: String,
     
   },
   Speed:{
      type: String
   }
   ,
   DamageImmunities:{
      type: String
   }  ,
   ConditionImmunities:{
      type: String
   }
   ,
   Senses:{
      type: String
   }
   ,
   Languages:{
      type: String
   }
   ,
   Challenge:{
      type: String
   }
})

module.exports = mongoose.model('people', peopleSchema);