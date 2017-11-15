import React from 'react';

class LifeCycle extends React.Component {

    constructor(props){
        super(props);

        console.log('Me construyo');

        this.state = {
            counter : 10
        }
    }

    componentWillMount(){
        console.log('Me voy a renderizar');
        // Hacer alguna llamada afuera.
    }

    render(){
        console.log('Renderizo');

        return (
            <div>
                {
                    this.state.counter == 10 ? 'Carganado....' : this.state.counter
                }
            </div>
        )
    }

    componentDidMount(){
        console.log('Ya me renderice!');
        // Disparao una llamada subsiguiente o de actualizacion.
        /*setTimeout( () => {
            this.setState({ counter: 11});
        }, 5000)*/

        this.actualizador = setInterval(() => {
            console.log('Actualizo contador');
            this.setState({ counter: this.state.counter + 1});
        }, 2000)
    }

    componentWillUnmount(){
        console.log('me voy a desmontar');
        // Hacer limpieza de referencias.
        clearInterval(this.actualizador);
    }
}

export default LifeCycle;