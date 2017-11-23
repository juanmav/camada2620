import React from 'react';
import { Link } from 'react-router-dom'

class PostItem extends React.Component {

    constructor(props){
        super(props)
    }


    goToEdit = () => {
        window.location.href = '/post/edit/' + this.props.id
    };

    render(){
        return (
            <div>
                <h1>{ (this.props.index + 1)  +'. '+this.props.title }</h1>
                <p>{this.props.body}</p>
                <button>Like</button>
                <Link to={'/post/edit/' + this.props.id } > Editar </Link>
                <button onClick={this.goToEdit}>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default PostItem;