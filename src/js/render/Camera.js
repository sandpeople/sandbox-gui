import React from 'react';
import * as THREE from 'three';

class Camera extends React.Component {
  render() {
    return (
      <perspectiveCamera
        name="camera"
        fov={30}
        aspect={this.props.aspect}
        near={0.1}
        far={1000}
        position={this.props.json.camera.position}
        rotation={this.props.json.camera.rotation}
      />
    );
  }
}

export default Camera;
