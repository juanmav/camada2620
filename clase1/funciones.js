let coleccion = [ 'Juan', 'Pedro', 'Luciano', 'Natalia', 'Laura'];

let nuevo = coleccion.map( element =>  '---' + element + '----');

//console.log(nuevo);
//console.log(coleccion);


function Person(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.getFullName = () => this.nombre + ' ' + this.apellido;
}


let p = new Person('Juan', 'Perez');

console.log(p);

console.log(p.getFullName());

// TODO volver a ver.
/*function hasEmail(user) {
    return u.email == "coder@coder.com";
}

let hasEmail2 = u =>  u.email == "coder@coder.com";

let conEmailTal = users.filter(hasEmail2);*/