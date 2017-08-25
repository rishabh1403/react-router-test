import React, { Component } from 'react';

export default class PostItem extends Component {
  
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="App">
        {this.props.match.params.id}
      </div>
    );
  }
}

