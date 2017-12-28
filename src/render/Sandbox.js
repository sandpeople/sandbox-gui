import React from 'react';
import * as THREE from 'three';

class Sandbox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.id = props.id;
    this.position = new THREE.Vector3(0,0,0);
  }

  render() {
    return (
      <mesh
        position={this.position}
      >
        <boxGeometry
          width={this.props.json.sandbox.width}
          height={this.props.json.sandbox.height}
          depth={1}
        />
        <meshBasicMaterial
          color={0xcca300}
        />
      </mesh>
    );
  }
}

export default Sandbox;
