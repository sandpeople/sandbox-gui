import React from 'react';
import * as THREE from 'three';
import {updateTHREEVector3, updatedCameraPosition, updateKinectPosition} from './Utils';

import Sandbox from './sidebar/Sandbox';
import Camera from './sidebar/Camera';
import Kinect from './sidebar/Kinect';

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
    <div className="sidebar">
      <Sandbox
        json={this.props.json}
        updateJSON={this.props.updateJSON}
      />
      <Camera
        json={this.props.json}
        updateJSON={this.props.updateJSON}
      />
      {this.props.json.kinects.map((e,i) =>
        <Kinect
          id={i}
          json={this.props.json}
          updateJSON={this.props.updateJSON}
        />
      )}
    </div>);
  }
}

export default Sidebar;
