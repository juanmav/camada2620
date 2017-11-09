const request = require('request');

request('https://jsonplaceholder.typicode.com/users/', function (err, response, users) {
    request('https://jsonplaceholder.typicode.com/posts/', function (err, response, posts) {
        console.log(JSON.parse(users)[0]);
        console.log(JSON.parse(posts)[0]);

    });
});