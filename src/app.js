import React, { Component } from 'react';
import './app.css';

import Loader from 'react-loader-spinner'

import Info from './components/info';
import Experiances from './components/experiance';
import Skills from './components/skills';
import Educations from './components/educations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: false });
    }, 3000);
  }

  render() {
    if (this.state.load) {
      return (
        <div
          className="container text-center"
          style={{
            paddingTop: '30%'
          }}
        >
          <Loader
            type="Watch"
            color="#00bfff"
            height="100px"
            width="100px"
          />
        </div>
      );
    }
    else {
      return (
        <div className="container bg-light pd-6">
          <Info />
          <hr />
          <Experiances />
          <hr />
          <Educations />
          <hr />
          <Skills />
        </div>
      );
    }
  }
}

export default App;
