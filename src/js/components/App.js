import React, { Component } from 'react';
import * as THREE from 'three';


import {spawnKinect} from '../Utils';

import CONSTANTS from '../../CONSTANTS';
import RenderJSON from './render/RenderJSON';
import Sidebar from './sidebar/Sidebar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sandbox: {
        width: 30,
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
    spawnKinect(this.state, this.updateJSON.bind(this));
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
