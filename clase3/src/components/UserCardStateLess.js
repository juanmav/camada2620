import React from 'react';

const UserCardStateLess = function (props) {
    return(
        <div>
            hola esto es la card de un usuario<br/>
            <br/>
            Nombre: {props.name}<br/>
            Apellido: {props.lastname}<br/>
            Dni: {props.dni}<br/>
            <br/>
        </div>
    )
};

export default UserCardStateLess;