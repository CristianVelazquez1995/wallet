import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

import Header from './Header';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
