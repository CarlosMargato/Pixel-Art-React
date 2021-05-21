import React from 'react';
import './App.css';
import Forms from './Components/Forms';
import Header from './Components/Header';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <Forms /> 
      </main>
    );
  }
}

export default App;
