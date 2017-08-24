import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

render(<App/>,document.getElementById('root'));