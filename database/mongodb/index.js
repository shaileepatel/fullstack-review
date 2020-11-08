const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

let repoSchema = new mongoose.Schema({
  id: {type: Number, unique : true, required : true, dropDups: true},
  name: String,
  link: String,
  ownerName: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {
  var repos = [];
  for (var i = 0; i < data.length; i++) {
    var obj = {
      id: data[i].id,
      name: data[i].name,
      link: data[i].html_url,
      ownerName: data[i].owner.login
    }
    repos.push(obj);
  }
  Repo.insertMany(repos, (err) => {
    if (err) {
      callback(err);
    } else {
      console.log('added to db!');
      callback(null);
    }
  })
}

let find = (callback) => {
  Repo.find({}).sort({id: -1}).limit(25).exec(function(err, repos) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, repos);
    }
  });
}

module.exports.save = save;
module.exports.find = find;