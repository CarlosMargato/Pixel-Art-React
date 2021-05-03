import React from 'react';
import './App.css';
import Forms from './Components/Forms';
import Header from './Components/Header';
import Table from './Components/Table';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <main className="App">
        <Header />
        <Forms />
        <Table />  
      </main>
    );
  }
}

export default App;
