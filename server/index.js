const express = require('express');
var bodyParser = require('body-parser');
var github = require('../helpers/github.js')
var db = require('../database/mysql')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  var user = req.body.repoName;
  github.getReposByUsername(user, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  });
});

app.get('/repos', function (req, res) {
  db.find((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
