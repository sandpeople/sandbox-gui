import React from 'react';

import CONSTANTS from '../../../CONSTANTS';

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
          width={this.props.json.kinects[this.id].width}
          height={this.props.json.kinects[this.id].height}
        />
        <meshBasicMaterial
          color={CONSTANTS.KINECT_COLOR}
        />
      </mesh>
    );
  }
}

export default Kinect;
