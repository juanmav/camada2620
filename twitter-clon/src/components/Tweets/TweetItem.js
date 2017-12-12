import React from 'react';
import PropTypes from 'prop-types'

class TweetItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        let email = localStorage.getItem('email');
        this.setState({email})
    }


    removeMe = () => {
        fetch('http://159.203.190.127:4000/tweets/' + this.props._id, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            method: 'DELETE', // NO opcional,
        })
            .then(response => response.json())
            .then( data => {
                console.log(data);
                alert('Borrado con exito!');
                this.props.removeFn(this.props._id)
            })
    };


    render(){
        return (
            <div>
                Message: { this.props.message } <br/>
                Author: { this.props.author.name}<br/>
                Mail: { this.props.author.email}<br/>
                <button> Comentar </button>
                {
                    this.state.email == this.props.author.email ?
                        <div>
                            <button
                                onClick={ () => window.location.href = '/tweet/edit/' +  this.props._id }
                            >
                                Editar
                            </button>
                            <button onClick={this.removeMe}> Borrar </button>
                        </div>
                        :
                        ''
                }

                <hr/>
            </div>
        )
    }
}

TweetItem.propTypes = {
    message: PropTypes.string.isRequired,
};

export default TweetItem;