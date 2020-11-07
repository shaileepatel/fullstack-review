const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
  let userSchema = new mongoose.Schema({
    name: String,
  });

  let User = mongoose.model('User', userSchema);
  let user1 = new User({name: 'KP'});
  user1.save(function (err, savedUser1) {
    if (err) return console.error(err);
    console.log(savedUser1);
  });
});


// let userSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
// });

// let User = mongoose.model('User', userSchema);

