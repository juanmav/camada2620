const fetch = require('node-fetch'); // import fetch from 'node-fetch';

async function getAllAndMerge() {
    //let responseUsers = await fetch('https://jsonplaceholder.typicode.com/users/');
    //let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts/');

    let responsesAll = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/'),
        fetch('https://jsonplaceholder.typicode.com/posts/')
    ]);

    let dataAll = await Promise.all([
        responsesAll[0].json(),
        responsesAll[1].json()
    ]);

    let users = dataAll[0];
    let posts = dataAll[1];


    //console.log(users[0]);
    //console.log(posts[0]);

    let postsMerged = posts.map( p => {
        let newPost = Object.assign({}, p);
        newPost.user = users.find( u => u.id == p.userId);
        delete newPost.userId;
        return newPost;
    });

    return postsMerged;

}

function sumar(a,b){
    return a + b
}

module.exports = { sumar, getAllAndMerge };