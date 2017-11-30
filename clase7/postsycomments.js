const fetch = require('node-fetch');

async function getPostsWithComments() {
    let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts/');
    let posts = await responsePosts.json();

    let postsWithComments = await Promise.all(posts.map( async p => {
        let newPost = Object.assign({}, p);
        let {  user, comments } = await getDataFromPost(p);

        newPost.comments = comments;
        newPost.user = user;
        return newPost
    }));

    return postsWithComments;

}

async function getDataFromPost(post){
    let commentsRespose = await fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments');
    let comments = await commentsRespose.json();
    let userResponse = await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId);
    let user = await userResponse.json();

    return {
        comments,
        user
    }
}

getPostsWithComments()
    .then( postsWithComments => {
        console.log(postsWithComments[0]);
    })
    .catch( err => console.log('explooooooooooooooooooooooooootooo!!'));