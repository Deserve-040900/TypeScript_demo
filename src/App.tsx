import React from 'react';
import logo from './logo.svg';
import './App.css';

class Greeting {
  greet(): void {
    console.log("Hello world !!!");
  }
}
var obj = new Greeting();
console.log(obj.greet());

function App() {
  var mess:string = "Hello guys !";
  console.log(mess);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
