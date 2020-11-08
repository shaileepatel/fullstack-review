const axios = require('axios');
const config = require('../config.js');
var db = require('../database/mysql')

let options = {
  headers: {
    'User-Agent': 'request',
    'Authorization': `token ${config.TOKEN}`
  }
};

let getReposByUsername = (user, callback) => {
  axios.get(`https://api.github.com/users/${user}/repos`, options)
  .then((response) => {
    db.save(response.data, callback);
  })
  .catch((err) => {
    callback(err);
  })
}

module.exports.getReposByUsername = getReposByUsername;





