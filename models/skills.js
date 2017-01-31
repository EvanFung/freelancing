var mongoose = require('mongoose');

var SkillsSchema = new mongoose.Schema({
  name:String,
  type:String,
  question : [
    {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Question"
  }
  ]
});

module.exports = mongoose.model("Skills", SkillsSchema);
