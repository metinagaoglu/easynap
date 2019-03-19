import React, { Component } from 'react';

import Header from './Header';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
		<div id="app">
    <div class="container">
        
		<Header />
		<Home />
       
    </div>
</div>
    );
  }
}

export default App;
