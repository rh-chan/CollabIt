var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
  email: {type: String, required: true, index: { unique: true } },
  password: {type: String, required: true },
  name: String,
  interests: [String],
  avatar: {type: mongoose.Schema.Types.ObjectId, ref: 'Avatar'},
  name_tokenized: [String]
});

module.exports = mongoose.model('User', userSchema);
