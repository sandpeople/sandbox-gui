import React, { Component } from 'react';
import * as THREE from 'three';


import {spawnKinect} from '../UtilsKinect';
import {spawnProjector} from '../UtilsProjector';

import CONSTANTS from '../../CONSTANTS';
import RenderJSON from './render/RenderJSON';
import Sidebar from './sidebar/Sidebar';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sandbox: {
        width: CONSTANTS.SANDBOX_SPAWN_WIDTH,
        height: CONSTANTS.SANDBOX_SPAWN_HEIGHT,
      },
      camera: {
        position:  new THREE.Vector3(
          CONSTANTS.CAMERA_SPAWN_POSITION_X,
          CONSTANTS.CAMERA_SPAWN_POSITION_Y,
          CONSTANTS.CAMERA_SPAWN_POSITION_Z),
        rotation: new THREE.Euler(
          CONSTANTS.CAMERA_SPAWN_ROTATION_X,
          CONSTANTS.CAMERA_SPAWN_ROTATION_Y,
          CONSTANTS.CAMERA_SPAWN_ROTATION_Z),
      },
      kinects: [],
      projectors: []
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
    spawnProjector(this.state, this.updateJSON.bind(this));
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
