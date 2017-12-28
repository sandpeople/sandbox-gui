import React from 'react';

import {updateTHREEVector3, updatedCameraPosition, updateKinectPosition} from '../Utils';

class Kinect extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.id = props.id;
  }
  updateInput(e) {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    let name = e.target.name;
    let value = e.target.value;

    console.log(e.target.name, e.target.value);
    if (name == 'kinect-position-x') {
      updateKinectPosition(json, this.id, {x:value}, updateJSON);
    } else if(name == 'kinect-position-y') {
      updateKinectPosition(json, this.id, {y:value}, updateJSON);
    } else if(name == 'kinect-position-z') {
      updateKinectPosition(json, this.id, {z:value}, updateJSON);
    }
  }
  render() {
    return (
      <div class="kinect" id={this.id}>
        <h1>{this.props.json.kinects[this.id].name}</h1>
        <ul>
          <li>
            X:
            <input
              type="number"
              name="kinect-position-x"
              value={this.props.json.kinects[this.id].position.x}
              onChange={this.updateInput.bind(this)}
            >
            </input>
          </li>
          <li>
            Y:
            <input
              type="number"
              name="kinect-position-y"
              value={this.props.json.kinects[this.id].position.y}
              onChange={this.updateInput.bind(this)}
            >
            </input>
          </li>
          <li>
            Z:
            <input
              type="number"
              name="kinect-position-z"
              value={this.props.json.kinects[this.id].position.z}
              onChange={this.updateInput.bind(this)}
            >
            </input>
          </li>
        </ul>
      </div>
    );
  }
}

export default Kinect;
