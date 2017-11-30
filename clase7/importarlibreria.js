const { getAllAndMerge } = require('./usersyposts');

//getAllAndMerge()
//.then( posts => console.log(posts[2]));

(async () => {
    let posts = await getAllAndMerge();
    console.log(posts[2])
})();