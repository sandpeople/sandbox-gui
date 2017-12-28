import React, { Component } from 'react';
import * as THREE from 'three';

import logo from './logo.svg';
import './App.css';
import RenderJSON from './RenderJSON';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      camera: {
        position:  new THREE.Vector3(0, 0, 5)
      },
      cubeRotation: new THREE.Euler(),
    };
  }
  updateJSON(json) {
    this.setState(json);
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          json={this.state}
          updateJSON={this.updateJSON.bind(this)}
        />
        <RenderJSON
          json={this.state}
          updateJSON={this.updateJSON.bind(this)}
        />
      </div>
    );
  }
}

export default App;
