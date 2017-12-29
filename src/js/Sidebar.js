import React from 'react';
import * as THREE from 'three';

import {addKinect} from './Utils';

import Sandbox from './sidebar/Sandbox';
import Camera from './sidebar/Camera';
import Kinect from './sidebar/Kinect';

class Sidebar extends React.Component {
  addKinect() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    addKinect(json, {}, updateJSON);
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
      <button
        className="add-kinect"
        onClick={this.addKinect.bind(this)}
      >Add Kinect</button>
    </div>);
  }
}

export default Sidebar;
