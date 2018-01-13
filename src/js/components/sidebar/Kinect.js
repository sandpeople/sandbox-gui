import React from 'react';

import {
  updateKinectPosition,
  deleteKinect,
  updateKinectRotation,
  updateKinectSize} from '../../UtilsKinect';

import PositionRotationWidthHeightElement from './PositionRotationWidthHeightElement';


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
    if (name ==='kinect-position-x') {
      updateKinectPosition(json, this.id, {x:value}, updateJSON);
    } else if(name ==='kinect-position-y') {
      updateKinectPosition(json, this.id, {y:value}, updateJSON);
    } else if(name ==='kinect-position-z') {
      updateKinectPosition(json, this.id, {z:value}, updateJSON);
    } else if (name ==='kinect-rotation-x') {
      updateKinectRotation(json, this.id, {x:value}, updateJSON);
    } else if(name ==='kinect-rotation-y') {
      updateKinectRotation(json, this.id, {y:value}, updateJSON);
    } else if(name ==='kinect-rotation-z') {
      updateKinectRotation(json, this.id, {z:value}, updateJSON);
    } else if(name === 'kinect-width') {
      updateKinectSize(json, this.id, {width:value}, updateJSON);
    } else if(name === 'kinect-height') {
      updateKinectSize(json, this.id, {height:value}, updateJSON);
    }
  }

  delete() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    deleteKinect(json, this.id, updateJSON);
  }

  render() {
    return (
      <PositionRotationWidthHeightElement
        className="kinect"
        id={this.id}
        property="kinects"
        delete={this.delete.bind(this)}
        json={this.props.json}
        updateInput={this.updateInput.bind(this)}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Kinect;
