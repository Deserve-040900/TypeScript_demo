import React from 'react';
import logo from './logo.svg';
import './App.css';

import { PostRequest } from './Components/POST_request';

function App() {
  return (
    <div>
        <h3 className="p-3 text-center">React HTTP POST Requests with Fetch</h3>
        <PostRequest />
    </div>
  );
}

export default App;
