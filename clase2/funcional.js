let watch = Math.floor(Math.random() * 10) + 1  ; // Esto seria una Variable.

let user = {
    name: 'Juan',
    lastname: 'Perez',
    age: 30
};

function updateUser(u) {
    let nose = {};
    nose.age = u.age + 1;
    nose.name = u.name;
    nose.lastname = u.lastname;
    // watch++;
    // nose.numberUpdate = watch;
    return nose;
}


let updatedUser = updateUser(user);

console.log(user);
console.log(updatedUser);

/*function sumarUno(n) { // Pasa por parametro.
    n = n + 1;
    return n;
}

let numero = 10;

let nuevoNumero = sumarUno(numero);

//console.log(numero);
//console.log(nuevoNumero);*/