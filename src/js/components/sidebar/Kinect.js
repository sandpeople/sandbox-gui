import React from 'react';

import '../../../css/sidebar/Kinect.css';

import {PositionRotation} from './PositionRotation';
import WidthHeightUlInput from './WidthHeightUlInput';
import {
  updateKinectPosition,
  deleteKinect,
  updateKinectRotation,
  updateKinectSize} from '../../Utils';

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
      <div className="kinect">
        <div className="titlebar">
          <h1>{'kinect' + (this.id + 1)}</h1>
          <button onClick={this.delete.bind(this)}>X</button>
        </div>
        <WidthHeightUlInput
          prefix="kinect"
          valueObj={this.props.json.kinects[this.id]}
          json={this.props.json}
          updateInput={this.updateInput.bind(this)}
          onChange={this.props.onChange}
        />
        <PositionRotation
          className="kinect"
          valueObj={this.props.json.kinects[this.id]}
          onChange={this.updateInput.bind(this)}
        />
      </div>
    );
  }
}

export default Kinect;
