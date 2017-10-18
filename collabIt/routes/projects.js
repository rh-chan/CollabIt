var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var methodOverride = require('method-override'); //used to manipulate POST
var formidable = require('formidable');
var qt = require('quickthumb');
var bodyParser = require('body-parser');
var session = require('express-session');
var utils = require('../utils');

express().use(qt.static(__dirname + '/'));
router.use(bodyParser.urlencoded({
  extended: true
}));

router.route('/')
  .get(function (req, res, next) {
    if (req.query.tags) {
      var query = req.query.tags.split(' ');
      
      // Search for users
      if (req.query.searchUser == 1) {
        mongoose.model('User').find(
        {
          $or:[{interests : {$in: query}}, {name_tokenized : {$in: query}}]
        }, function (err, users) {
          if (err) {
            console.log(err);
            return;
          }

          // create list of users to ranks.
          // +2 for every interest word matched
          // +3 for every name word matched
          var userRanks = new Array(users.length);
          for (var i = 0; i < users.length; i++) {
            var user = users[i];
            var interests_intersect = utils.intersect(user.interests, query);
            var name_intersect = utils.intersect(user.name_tokenized, query);

            var points = (interests_intersect.length * 2) + (name_intersect.length * 3);
            var arr = [user, points];
            userRanks[i] = arr;
          }
          // sort descending. highest rank first
          userRanks = userRanks.sort(utils.comparator);

          // return only users
          var toReturn = new Array();
          for (var i = 0; i < users.length; i++) {
            toReturn.push(userRanks[i][0]);
          }
          res.render('users/index', {
            "users": toReturn
          });
        });
      }
      // Search Projects
      else if (req.query.searchUser == 0) {
        mongoose.model('Project').find(
        {
          $or:[{tags : {$in: query}}, {name_tokenized : {$in: query}}, {description_tokenized : {$in: query}}]
        }, function (err, projects) {
          if (err) {
            console.log(err);
            return;
          }

          // create list of projects to ranks.
          // +1 for every description word matched
          // +2 for every tags word matched
          // +3 for every name word matched
          var projectRanks = new Array(projects.length);
          for (var i = 0; i < projects.length; i++) {
            var project = projects[i];
            var description_intersect = utils.intersect(project.description_tokenized, query);
            var tags_intersect = utils.intersect(project.tags, query);
            var name_intersect = utils.intersect(project.name_tokenized, query);

            var points = (description_intersect.length * 1) + (tags_intersect.length * 2) + (name_intersect.length * 3);
            var arr = [project, points];
            projectRanks[i] = arr;
          }
          // sort descending. highest rank first
          projectRanks = projectRanks.sort(utils.comparator);

          // return only projects
          var toReturn = new Array();
          for (var i = 0; i < projects.length; i++) {
            toReturn.push(projectRanks[i][0]);
          }
          res.render('projects/index', {
            "projects": toReturn
          });
        });
      }
    
    // all projects
    } else {
      mongoose.model('Project').find({}, function (err, projects) {
        if (err) {
          console.log(err);
          return;
        }
        res.render('projects/index', {
          "projects": projects
        });
      });
    }
  })
  
  //POST a new project
  .post(function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      var name = fields.name; 
      var description = fields.description; 
      var tags = fields.tags.split(',');
      var userId = req.session.userId;
      var description_tokenized = description.split(' ');
      var name_tokenized = name.split(' ');

      // remove leading and trailing whitespace
      for (var i = 0; i < tags.length; i ++) {
        tags[i] = tags[i].trim();
      }
      mongoose.model('Project').create({
        name: name,
        description: description,
        tags: tags,
        owner: userId,
        description_tokenized: description_tokenized,
        name_tokenized: name_tokenized
      }, function (err, project) {
        if (err) {
           res.send("There was a problem adding the USER to the database.");
        } else {
          // redirect to main page for now. TODO: make it go somewhere nice
          res.redirect("/projects/");                  
        }
      });
    });
  });

router.get('/new', function(req, res) {
  res.render('projects/new');
});

router.route('/:id')
  .get(function(req, res) {
    mongoose.model('Project').findById(req.params.id, function (err, project) {
      if (err) {
        console.log('GET Error: There was a problem retrieving: ' + err);
      } else {
        // Render the response.
        res.format({
          html: function(){
            res.render('projects/show', {
              project: project
            });
          }
        }); 
      }
    });
  });


module.exports = router;