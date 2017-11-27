
export function actualizarOcrear(post, id) {
    // POST y PUT
    return fetch('https://jsonplaceholder.typicode.com/posts/' + ( id ? id : ''), {
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
        },
        method: id ? 'PUT': 'POST',
        body: JSON.stringify(post)
    })
        .then( response => response.json())


}


