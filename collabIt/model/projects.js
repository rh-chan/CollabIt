var mongoose = require('mongoose'); 

var projectSchema =  new mongoose.Schema({ 
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: String,
  description: String,
  tags: [String],
  description_tokenized: [String],
  name_tokenized: [String]

});


module.exports = mongoose.model('Project', projectSchema);
