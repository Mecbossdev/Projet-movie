import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';

class App extends Component {
  state = { 
    posts: [
      {
        id: 1,
        title: 'O title 1',
        body: 'O corpo 1',
      },
      {
        id: 2,
        title: 'O title 2',
       body: 'O body 2',
      },
      {
        id: 3,
        title: ' O titulo 3',
        body: 'O corpo 3',
      }
    ]
  };


  render() {
    const { posts } = this.state;
    
    
    return (
      <div className="App">
        <h1> {posts}</h1>
      </div>
    );
  }
}


  

export default App;
