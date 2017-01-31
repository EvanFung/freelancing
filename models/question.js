var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question : String,
  type: String,
  answer : [
    {
      ans:String
    }
  ]
});
