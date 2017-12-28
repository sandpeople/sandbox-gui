import React from 'react';

import {updateTHREEVector3, updatedCameraPosition, updateKinectPosition} from '../Utils';

class Kinect extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.id = props.id;
  }

  render() {
    return (
      <mesh
        rotation={this.props.json.kinects[this.id].rotation}
        position={this.props.json.kinects[this.id].position}
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
    );
  }
}

export default Kinect;
