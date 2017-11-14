import React from 'react';

class Counter2 extends React.Component {

    constructor(){
        super();
        console.log('arriba!!!!');
        this.state = {
            counter: 1116,
            counter2: 10,
        }
    }

    sumar = (event) => {
        console.log('Me clickearon!!!');
        let nuevo = this.state.counter + 1;
        this.setState({ counter:  nuevo });
    };

    render(){
        console.log(this.state);
        return (
            <div>
                Componente Counter!
                <br/>
                <br/>
                {this.state.counter}
                <button onClick={this.sumar} >Add</button>
                <br/>
                {this.state.counter2}
            </div>
        )
    }
}

export default Counter2;