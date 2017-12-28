import React from 'react';
import * as THREE from 'three';
import {updateTHREEVector3, updatedCameraPosition, updateKinectPosition} from './Utils';

class Sidebar extends React.Component {

  updateInput(e) {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    let name = e.target.name;
    let value = e.target.value;

    console.log(e.target.name, e.target.value);
    if(e.target.name == 'camera-position-x') {
      updatedCameraPosition(json, {x:value}, updateJSON);
    } else if (name == 'camera-position-y') {
      updatedCameraPosition(json, {y:value}, updateJSON);
    } else if (name == 'camera-position-z') {
      updatedCameraPosition(json, {z:value}, updateJSON);
    } else if (name == 'kinect0-position-x') {
      updateKinectPosition(json, 0, {x:value}, updateJSON);
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
        <li>
          Y:
          <input
            type="number"
            name="camera-position-y"
            value={this.props.json.camera.position.y}
            onChange={this.updateInput.bind(this)}
          >
          </input>
        </li>
        <li>
          Z:
          <input
            type="number"
            name="camera-position-z"
            value={this.props.json.camera.position.z}
            onChange={this.updateInput.bind(this)}
          >
          </input>
        </li>
      </ul>
      <h1>Kinect1</h1>
      <ul>
        <li>
          X:
          <input
            type="number"
            name="kinect0-position-x"
            value={this.props.json.kinects[0].position.x}
            onChange={this.updateInput.bind(this)}
          >
          </input>
        </li>
      </ul>
    </div>);
  }
}

export default Sidebar;
