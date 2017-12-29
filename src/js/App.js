import React, { Component } from 'react';
import * as THREE from 'three';

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
      kinects: [
        {
          name: 'kinect1',
          position: new THREE.Vector3(0,0,3),
          rotation: new THREE.Euler(0,0,0),
        },
      ],
    };
  }
  updateJSON(json) {
    this.setState(json);
    this.rerender();
  }

  getManualRenderTrigger(trigger) {
    this.rerender = trigger;
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
