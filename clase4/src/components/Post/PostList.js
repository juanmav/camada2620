import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {

    constructor(){
        super();
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        console.log('Voy a buscar los posts');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()) // es lo mismo que function (response) { return response.json()}
            .then( posts => {
                console.log(posts);
                this.setState({ posts: posts })
            });
    }

    render(){
        console.log('renderizo la pantalla');

        return (
            <div>
                {
                    //this.state.posts.length ? this.state.posts.length : 'Cargando Posts....'
                    this.state.posts.length ?
                        this.state.posts.map( (p, index) => <PostItem {...p} index={index}/>)
                        :
                        'Cargando Posts....'
                }
            </div>
        )
    }
}

export default PostList;