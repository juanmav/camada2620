// Librerias
import React  from 'react';
import './App.css';
// Componentes
import Header from './components/Header';
import UserCard from './components/UserCard';
import UserCard2 from './components/UserCard2';
import Counter from './components/Counter';
import UserCardStateLess from './components/UserCardStateLess';
import Counter2 from './components/Counter2';

class App extends React.Component {
    render() {
        return ( // JSX
            <div className="App">
                <Header/>
                <div className="App-intro">
                    <UserCard/>
                    <UserCard2 name="Pepe" lastname="Perez" dni="111111"/>
                    <UserCard2 name="Juan" lastname="Perez" dni="111112"/>
                    <UserCard2 name="Julian" lastname="Perez" dni="111113"/>
                    <UserCardStateLess name="Sin" lastname="Estado" dni="222113"/>
                    <UserCardStateLess name="asdasd" lastname="Es11111tado" dni="222113"/>
                    <UserCardStateLess name="Siasdasdasdsadn" lastname="Estado" dni="222113"/>
                    <Counter/>
                    <Counter/>
                    <Counter2 inicio={10}/>
                    <Counter2 inicio={200}/>
                </div>
            </div>
        );
    }
}

export default App;
