import React from 'react';

class Register extends React.Component{

    constructor(){
        super();

        this.state = {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: ''
            },
            loading: false
        };
    }

    fieldGenerator = (fieldname) => {
        return {
            onChange: (event) => {
                let user = this.state.user;
                user[fieldname] = event.target.value;
                this.setState({user});
            },
            value: this.state.user[fieldname]
        }
    };

    register = () => {
        console.log('Registratme! fecth!');

        fetch('http://159.203.190.127:4000/register',{
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.user)
        })
            .then(response => {
                console.log(response.status);
                if (response.status === 201){
                    return response.json()
                } else {
                    throw response;
                }

            })
            .then(data => {
                console.log('registracion con exito!');
                alert('Registrado con exito!');
                window.location.href = '/';
            })
            .catch( err => {
                console.log(err);
                alert('FALLO!');
            })

    };

    render(){
        console.log(this.state.user);
        return(
            <div>
                Nombre:<input {...this.fieldGenerator('name')}/><br/>
                Apellido:<input {...this.fieldGenerator('lastname')}/><br/>
                email:<input {...this.fieldGenerator('email')}/><br/>
                password:<input {...this.fieldGenerator('password')} type="password" /><br/>
                <button onClick={this.register}>Registrarme!</button>
            </div>
        )
    }
}

export default Register;