import React from 'react';
import TweetItem from './TweetItem';

class TweetList extends React.Component {

    constructor(){
        super();
        this.state = {
            tweets : []
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
                this.setState({ tweets: tweets})
            })
    }

    render(){
        console.log(this.state.tweets);
        // hacer un MAP
        // hacer un TweetItem para mostrar en la lista.

        return (
            <div>
                {
                    this.state.tweets.map( t => {
                        return <TweetItem key={t._id} {...t} algo={'pepe'}/>
                    })
                }
            </div>
        )
    }
}

export default TweetList;