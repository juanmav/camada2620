import React from 'react';
import { generatedHandleAttribute } from '../helpers/forms';
import './post.css'
import { actualizarOcrear } from './backend';

class PostForm extends React.Component {

    constructor(props){
        super(props);
        console.log('Mis propiedades!');
        console.log(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount(){
        if(this.props.postId){
            console.log('Esto es una edicion');
            this.setState({ loading : true});
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.postId)
                .then(response => response.json())
                .then(post => {
                    this.setState({ loading : false});
                    console.log('vino la consulta!');
                    this.setState({ title: post.title, body: post.body});
                })
        } else {
            console.log('Esto es un alta!');
        }
    }

    save = () => {
        console.log(this.state);
        this.setState({ loading : true});
        actualizarOcrear(this.state, this.props.postId)
            .then( data => {
                console.log(data);
                alert(this.props.postId ? 'Actualizado!' : 'Creado!');
                this.setState({ loading : false});
                window.location.href = '/postlist';
            })
    };

    styles = {
        "color": "red",
        "border": "1px solid coral",
        "padding": "10px"
    };

    render(){
        console.log(this.state);
        return (
            <div>
                <h1>Crear nuevo Form!</h1>
                title:
                <input
                    className={ this.state.title.length > 10 ? "borderInput" : ''}
                    value={this.state.title}
                    onChange={generatedHandleAttribute(this,'title')}
                    disabled={this.state.loading}
                />
                {this.state.title.length > 10 ? <label>error!!!</label>: ''}
                <br/>
                body:
                <textarea
                    style={this.styles}
                    value={this.state.body}
                    onChange={generatedHandleAttribute(this,'body')}
                    disabled={this.state.loading}
                />
                <br/>
                <button
                    onClick={this.save}
                    disabled={this.state.loading}>
                    { this.props.postId ? 'Salvar!': 'Crear!'}
                    </button>
            </div>
        )
    }

}

export default PostForm;