import React from 'react';
  import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

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
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}

            position={this.props.json.camera.position}
          />
          <mesh
            rotation={this.props.json.cubeRotation}
            position={this.props.json.kinects[0].position}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
            />
            <meshBasicMaterial
              color={0x00ff00}
            />
          </mesh>
        </scene>
      </React3>
    </div>);
  }
}

export default RenderJSON;
