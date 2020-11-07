const axios = require('axios');
const config = require('../config.js');
var db = require('../database/index.js')

let getReposByUsername = (user, callback) => {
  axios.get(`https://api.github.com/users/${user}/repos`)
  .then((response) => {
    db.save(response.data, callback);
  })
  .catch((err) => {
    console.log(err);
    callback(err);
  })
}

module.exports.getReposByUsername = getReposByUsername;





  // let options = {
  //   url: 'FILL ME IN',
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // };