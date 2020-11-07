const express = require('express');
var bodyParser = require('body-parser');
var github = require('../helpers/github.js')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  var user = req.body.term;
  github.getReposByUsername(user, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

