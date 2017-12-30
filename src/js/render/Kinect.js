import React from 'react';

import CONSTANTS from '../../CONSTANTS';

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
        <planeGeometry
          width={CONSTANTS.KINECT_SPAWN_WIDTH}
          height={CONSTANTS.KINECT_SPAWN_HEIGHT}
        />
        <meshBasicMaterial
          color={0x00ff00}
        />
      </mesh>
    );
  }
}

export default Kinect;
