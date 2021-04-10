import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Text from './components/text/Text';
import Collection from './components/collection/Collection';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Text/>
            <Collection/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
