const { getAllAndMerge } = require('./usersyposts');

getAllAndMerge()
.then( posts => console.log(posts[2]));