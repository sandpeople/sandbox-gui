import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

import Kinect from './render/Kinect';
import Sandbox from './render/Sandbox';

class RenderJSON extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  _onManualRenderTriggerCreated(trigger) {
    this._renderTrigger = trigger;
    this.props.getManualRenderTrigger(trigger);
  }

  componentDidMount() {
    // render one frame to show initial scene
    this._renderTrigger();
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    return (
    <div className="render">
      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}

        forceManualRender={true}
        onManualRenderTriggerCreated={this._onManualRenderTriggerCreated.bind(this)}
      >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={30}
            aspect={width / height}
            near={0.1}
            far={1000}

            position={this.props.json.camera.position}
          />
          <Sandbox json={this.props.json}/>
          {this.props.json.kinects.map((e,i) =>
            <Kinect
              id={i}
              json={this.props.json}
            />
          )}
        </scene>
      </React3>
    </div>);
  }
}

export default RenderJSON;
