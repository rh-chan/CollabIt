var mongoose = require('mongoose');

var collabSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'},

});

module.exports = mongoose.model('Collaboration', collabSchema);
