import React from 'react';
import './App.css';

// import ScrollPlayground from './Components/ScrollDemo';
import {PostRequest} from './Components/POST_request'

function App() {
  return (
    <div>
        <h3 className="p-3 text-center">Hello Guys I'm a TypeScript</h3>
        <PostRequest />
    </div>
  );
}

export default App;
