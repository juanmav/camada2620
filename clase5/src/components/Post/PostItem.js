import React from 'react';

class PostItem extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>{ (this.props.index + 1)  +'. '+this.props.title }</h1>
                <p>{this.props.body}</p>
                <button onClick={this.apreto}>Like</button>
                <button onClick={this.apreto}>Edit</button>
                <button onClick={this.apreto}>Delete</button>
            </div>
        )
    }
}

export default PostItem;