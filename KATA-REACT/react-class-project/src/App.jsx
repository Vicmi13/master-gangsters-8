import './App.css';
import Counter from './components/Counter';
import ShowInfoCounter from './components/ShowInfoCounter';
import React, { useState } from 'react'

function App() {
  const [nameValue, setNameValue] = useState('')


  const handleCounter = (name, age) => {
    // this.setState({nameValue: name})
    setNameValue(name)
    // console.log('name PROPERTY', nameValue)
    // console.log('age PROPERTY', age)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Proyecto react con class components</h3>
        <Counter counter={handleCounter}/>
        <ShowInfoCounter counter={nameValue} />
      </header>
    </div>
  );
}

export default App;
