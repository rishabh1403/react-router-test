import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './components/posts';
import PostItem from './components/post_item';
import Profile from './components/profile';
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link><br />
        <Link to="/posts">Posts</Link><br />
        <Link to="/profile">Profile</Link><br />
        <hr />
      </header>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/posts" component={Posts}></Route>
      <Route path="/posts/:id" component={PostItem}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  </BrowserRouter>

  , document.getElementById('root'));