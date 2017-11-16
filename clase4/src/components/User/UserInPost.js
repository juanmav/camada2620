import React from 'react';

class UserInPost extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user : {}
        }
    }

    componentDidMount(){
        console.log('Voy a buscar los posts');
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.userId)
            .then(response => response.json()) // es lo mismo que function (response) { return response.json()}
            .then( user => {
                console.log(user);
                this.setState({ user: user })
            });
    }

    render(){
        return(
            <div>
                {
                    this.state.user.name ?
                        <div>
                            Autor: { this.state.user.name }
                        </div>
                        :
                        'Cargando....'
                }
            </div>
        )
    }
}

export default UserInPost;