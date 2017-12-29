import React from 'react';

import '../../css/sidebar/Kinect.css';

import SidebarItem from './SidebarItem';

import {updateKinectPosition, deleteKinect, updateKinectRotation} from '../Utils';

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
    } else if (name == 'kinect-rotation-x') {
      updateKinectRotation(json, this.id, {x:value}, updateJSON);
    } else if(name == 'kinect-rotation-y') {
      updateKinectRotation(json, this.id, {y:value}, updateJSON);
    } else if(name == 'kinect-rotation-z') {
      updateKinectRotation(json, this.id, {z:value}, updateJSON);
    }
  }

  delete() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    deleteKinect(json, this.id, updateJSON);
  }

  render() {
    return (
      <SidebarItem
        h1={'kinect' + this.props.json.kinects.length }
        className="kinect"
        valueObj={this.props.json.kinects[this.id]}
        onChange={this.updateInput.bind(this)}
      />
    );
  }
}

export default Kinect;
