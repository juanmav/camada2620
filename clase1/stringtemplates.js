
function armarMensaje(nombre, age, random){
    return 'Hola ' + nombre + ' como estas? Vos tenes ' + age + ' años \n'
        + ' ----- ' + '------ ' + random ;
}

let mensaje = armarMensaje( 'Juan', 30);

console.log(mensaje);

function armarMensaje2(nombre, age, random) {
    return `Hola  ${nombre}  como estas? Vos tenes  ${age}  años
    
            --------------------------------------------------
            "holaaaaaaa!"
            --------------------------------------------------
            <div>
                <div>${nombre} </div>
            </div>
            ${random} la...
            `;
}

console.log(armarMensaje2('Juan', 30,'asdasdasd'));