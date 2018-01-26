/*
 Practice making a web request to food2fork
*/

const request = require('request-promise');

request({
  uri: 'http://food2fork.com/api/search',
  qs: {
    key: '3916d15cff9c3897903bfe5852f1e415',
    q: 'honey'
  }
}).then((res) => {
  console.log(res.split());
})

// what are the purpose of databases with our q2 projects?

// why wouldnt we be using a login/register with this project if
// databases are required?

// what are the topics we are following in quarter 3?

// the lightining talks if we are going to continue to do them, can
// they be a little more focused?
