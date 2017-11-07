let coleccion = [ 'Juan', 'Pedro', 'Luciano', 'Natalia', 'Laura'];


coleccion.forEach(function (element) {
    console.log('---' + element + '----');
});


let actualizado = coleccion.map(function (element) {
    return element.toUpperCase();
});

console.log(actualizado);
console.log(coleccion);


