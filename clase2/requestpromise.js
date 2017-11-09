const requestProm = require('request-promise');




function postDetail (postId) {
    let respuesta = {};
    return requestProm('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(function (data) {
            let post = JSON.parse(data);
            respuesta.post = post;
            return requestProm('https://jsonplaceholder.typicode.com/users/'+ post.userId);
        })
        .then(function (data) {
            let user = JSON.parse(data);
            respuesta.user = user;
            return respuesta;
        });
}

/*postDetail(1)
    .then(function (respuesta1) {
        console.log(respuesta1);
    });

postDetail(2)
    .then(function (respuesta2) {
        console.log(respuesta2);
    });*/

let promDetail1 = postDetail(1);
let promDetail2 = postDetail(2);

/*Promise.all([promDetail1, promDetail2])
    .then(function (details) {
        let detail1 = details[0];
        let detail2 = details[1];

        console.log(detail1);
        console.log(detail2);
    });*/

let promUsers = requestProm('https://jsonplaceholder.typicode.com/users/');
let promPosts = requestProm('https://jsonplaceholder.typicode.com/posts/');

Promise
    .all([promUsers, promPosts])
    .then(function (values) {
        let users = JSON.parse(values[0]);
        let posts = JSON.parse(values[1]);

        // Tomar el listado de posts
        // y por cada post reemplezar el userId por el user.

    })
    .then(function (listaCompleta) {
        console.log(listaCompleta);
    })
    .catch(function (err) {
        console.log(err);
    });


