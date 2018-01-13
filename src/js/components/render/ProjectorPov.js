import React from 'react';

class ProjectorPov extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.id = props.id;
  }

  render() {
    return (
      <mesh
        position={this.props.json.projectors[this.id].positionPov}
      >
        <circleGeometry
          radius={1}
        />
        <meshBasicMaterial
          color="#b8b894"
        />
      </mesh>
    );
  }
}

export default ProjectorPov;
