import React from 'react';
import * as THREE from 'three';

class Sidebar extends React.Component {
  updateInput(e) {
    console.log(e.target.name, e.target.value);
    if(e.target.name == 'camera-position-x') {
      this.props.updateJSON({
        camera: {
          position: new THREE.Euler(
            parseFloat(e.target.value),
            this.props.json.camera.position.y,
            this.props.json.camera.position.z)
        }
      });
    }
  }

  render() {
    console.log(this.props.json);
    return (
    <div className="controls">
      <h1>Camera</h1>
      <ul>
        <li>
          X:
          <input
            type="number"
            name="camera-position-x"
            value={this.props.json.camera.position.x}
            onChange={this.updateInput.bind(this)}
          >
          </input>
        </li>
        <li>Y: {this.props.json.camera.position.y}</li>
        <li>Z: {this.props.json.camera.position.z}</li>
      </ul>
    </div>);
  }
}

export default Sidebar;
