import React from 'react';
import TweetItem from './TweetItem';

class TweetList extends React.Component {

    constructor(){
        super();
        this.state = {
            tweets : [],
            loading: true
        }
    }

    componentDidMount(){
        fetch('http://159.203.190.127:4000/tweets', {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: 'GET' // opcional
        })

            .then( response => response.json())
            .then( tweets => {
                this.setState(
                    {
                        tweets: tweets,
                        loading: false
                    }
                )
            })
    }

    removeTweet = (id) => {
        let list = this.state.tweets.filter( t => t._id != id).reverse();
        this.setState({ tweets: list})
    };

    render(){
        console.log(this.state.tweets);
        // hacer un MAP
        // hacer un TweetItem para mostrar en la lista.

        return (
            <div>
                <button onClick={ () => window.location.href = '/tweet/add'}> Crear un Tweet! </button>

                { /* Aca podria poner un dialog form para crear el tweet.*/}

                <hr/>
                { this.state.loading ? 'Cargando.....' : ''}
                {
                    this.state.tweets.reverse().map( t => {
                        return <TweetItem key={t._id} {...t} removeFn={this.removeTweet}/>
                    })
                }
            </div>
        )
    }
}

export default TweetList;