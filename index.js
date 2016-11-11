/* jshint esversion: 6 */
/* globals Promise, setTimeout, console, await, async, require */

var request = require('superagent');

function iterator() {
  for(let i = 0 ; i < 10000000 ; i++) {
    if (i === (10000000 - 1)) {
      console.log('iterator finished');
    }
  }
}

function gitHubCall() {
  return new Promise((resolve, reject) => {
    request.get('https://api.github.com/users/Romesz/repos').end((err, res) => {
      resolve();
      console.log('github call');
    });
  });
}

function timout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('setTimeout');
      resolve();
    }, 100);
  });
}

async function timer () {
  console.log('STARTED');
  await timout();
  await iterator();
  await gitHubCall();
  console.log('FINISHED');
}

timer();