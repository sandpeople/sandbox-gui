import React from 'react';

import CONSTANTS from '../../../CONSTANTS';

class Projector extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.id = props.id;
  }

  render() {
    return (
      <mesh
        rotation={this.props.json.projectors[this.id].rotation}
        position={this.props.json.projectors[this.id].position}
      >
        <planeGeometry
          width={this.props.json.projectors[this.id].width}
          height={this.props.json.projectors[this.id].height}
        />
        <meshBasicMaterial
          color={CONSTANTS.PROJECTOR_COLOR}
        />
      </mesh>
    );
  }
}

export default Projector;
