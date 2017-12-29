import React from 'react';

import SidebarItem from './SidebarItem';
import {updateCameraPosition, updateCameraRotation} from '../Utils';


class Camera extends React.Component {
  updateInput(e) {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    let name = e.target.name;
    let value = e.target.value;

    console.log(e.target.name, e.target.value);
    if(name == 'camera-position-x') {
      updateCameraPosition(json, {x:value}, updateJSON);
    } else if (name == 'camera-position-y') {
      updateCameraPosition(json, {y:value}, updateJSON);
    } else if (name == 'camera-position-z') {
      updateCameraPosition(json, {z:value}, updateJSON);
    } else if(name == 'camera-rotation-x') {
      updateCameraRotation(json, {x:value}, updateJSON);
    } else if (name == 'camera-rotation-y') {
      updateCameraRotation(json, {y:value}, updateJSON);
    } else if (name == 'camera-rotation-z') {
      updateCameraRotation(json, {z:value}, updateJSON);
    }
  }
  render() {
    console.log("hu", this.props);
    return (
      <SidebarItem
        h1="Camera"
        className="camera"
        valueObj={this.props.json.camera}
        onChange={this.updateInput.bind(this)}
      />
    );
  }
}

export default Camera;
