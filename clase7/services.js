const fetch = require('node-fetch'); // import fetch from 'node-fetch';


/*fetch('https://jsonplaceholder.typicode.com/users/')
    .then( response => {
        if (response.status == 200){
            return response.json()
        } else {
            return { message: 'fallo', status : response.status }
        }
    })
    .then( data => {
        if (data.status){
            console.log('Error de negocio!');
        } else {
            console.log(data[0])
        }
    })
    .catch( err => console.log(err));*/

async function getUsers() {
    try{
        console.log('5. antes del await');
        let response = await fetch('https://jsonplaceholder.typicode.com/users/');
        console.log('2. Voy hacer un await');
        if (response.status == 200){
            let data = await response.json();
            console.log(data[0].name);
        } else {

            console.log('Error de negocio!');
            throw 'fallo negocio';
        }
    } catch (e){
        console.log(e);
    }

    return 'Deci que esta todo OK'
}

console.log('1. antes de llamar');
getUsers()
    .then((valor) => console.log('4. Resolvi el get users ' +  valor));
console.log('3. despues de llamar');