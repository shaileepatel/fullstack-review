var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'wildcats',
  database : 'fetcher'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to mysql db!');
  }
});

var save = (data, callback) => {
  var repos = [];
  for (var i = 0; i < data.length; i++) {
    repos.push(`(${data[i].id}, '${data[i].name}', '${data[i].html_url}', '${data[i].owner.login}')`);
  }
  var query = `INSERT into repo (id, name, link, ownerName) values ${repos.join()}`;
  connection.query(query, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  })
}

var find = (callback) => {
  var query = `select * from repo order by id desc limit 25`;
  connection.query(query, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  })
}

module.exports.save = save;
module.exports.find = find;
