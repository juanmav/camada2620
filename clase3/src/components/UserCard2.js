import React from 'react';

class UserCard2 extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        console.log(this.props);
        return <div>
            hola esto es la card de un usuario<br/>
            <br/>
            Nombre: {this.props.name}<br/>
            Apellido: {this.props.lastname}<br/>
            Dni: {this.props.dni}<br/>
            <br/>
        </div>
    }
}

export default UserCard2;