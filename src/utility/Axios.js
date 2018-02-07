const axios = require('axios');
const BASE_URL = 'https://rolld.herokuapp.com';
// Change BASE_URL if you want to host your own server.

module.exports = {
  rollDice: function(num, size){
    return axios.post(`${BASE_URL}/api/${num}d${size}`);
  }
}