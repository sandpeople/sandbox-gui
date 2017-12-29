import React, { Component } from 'react';
import * as THREE from 'three';

import {spawnKinect} from './Utils';

import RenderJSON from './RenderJSON';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sandbox: {
        width: 30,
        depth: 3,
        height: 3,
      },
      camera: {
        position:  new THREE.Vector3(0, 0, 20),
        rotation: new THREE.Euler(0,0,0),
      },
      kinects: [],
    };
  }
  updateJSON(json) {
    this.setState(json);
    this.rerender();
  }

  getManualRenderTrigger(trigger) {
    this.rerender = trigger;
  }

  componentDidMount() {
    console.log('foo', this.state, this.updateJSON);
    //spawnKinect(this.state, this.updateJSON);
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
          getManualRenderTrigger={this.getManualRenderTrigger.bind(this)}
        />
      </div>
    );
  }
}

export default App;
