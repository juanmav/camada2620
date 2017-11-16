import React from 'react';
import UserInPost from '../User/UserInPost';

class PostItem extends React.Component {

    constructor(props){
        super(props)
    }


    apreto = () => {};


    render(){
        return (
            <div>
                <h1>{ (this.props.index + 1)  +'. '+this.props.title }</h1>
                <p>{this.props.body}</p>
                <UserInPost userId={this.props.userId}/>
                <button onClick={this.apreto}>Like</button>
                <button onClick={this.apreto}>Edit</button>
                <button onClick={this.apreto}>Delete</button>
            </div>
        )
    }
}

export default PostItem;