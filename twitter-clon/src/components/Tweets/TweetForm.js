import React from 'react';

class TweetForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            tweet : {
                message : ''
            },
            loading: false
        }
    }

    handleMessage = (event) => {
        let newTweet = Object.assign({}, this.state.tweet);
        newTweet.message = event.target.value;
        this.setState({ tweet: newTweet});

    };

    componentDidMount (){
        if(this.props.tweetId){
            this.setState({loading: true});
            // Edicion
            fetch('http://159.203.190.127:4000/tweets/' + this.props.tweetId, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                },
                method: 'GET' // opcional
            })

                .then( response => response.json())
                .then( tweet => {
                    this.setState({loading: false});
                    this.setState({tweet})
                })

        } else {
            // creacion
            console.log('creando');
        }
    }

    save = () => {
        console.log(this.state.tweet);

        this.setState({loading: true});
        fetch('http://159.203.190.127:4000/tweets/' + (this.props.tweetId ? this.props.tweetId : '' ), {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: (this.props.tweetId ? 'PUT': 'POST' ), // NO opcional,
            body : JSON.stringify(this.state.tweet)
        })
            .then( response =>{
                if (response.status == 201 || response.status == 202 ){
                    return response.json()
                } else {
                    throw response;
                }
            })
            .then( data => {
                console.log(data);
                alert('Salvado con Exito!');
                window.location.href = '/';
            })
            .catch(err => {
                alert('Hubo un error!');
                this.setState({loading: false});
            })
    };

    render(){
        return (
            <div>
                <h2> { this.props.tweetId ? 'Editar' : 'Crear' } tweet! </h2>
                Mensaje:
                <input
                    value={this.state.tweet.message}
                    onChange={this.handleMessage}
                    disabled={this.state.loading}
                />
                <br/>
                <button
                    onClick={this.save}
                    disabled={this.state.loading}
                >
                    { this.props.tweetId ? 'Salvar!' : 'Crear!' }
                    </button>
            </div>
        )
    }
}

export default TweetForm;