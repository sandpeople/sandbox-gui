import React from 'react';

import {spawnKinect} from '../../UtilsKinect';
import {spawnProjector} from '../../UtilsProjector';
import Sandbox from './Sandbox';
import Camera from './Camera';
import Kinect from './Kinect';
import Projector from './Projector';

/**
 * Component to display complete Sidebar. Sidebar allows you to
 * control the position/rotation of the kinects etc. with an input.
 *
 * Sidebar renders the list of existing kinects/camera/sandbox,
 * let's you add/remove kinects and modify properties of the elements
 * with a input.
 * @extends React
 */
class Sidebar extends React.Component {
  addKinect() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    spawnKinect(json, updateJSON);
  }

  addProjector() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    spawnProjector(json, updateJSON);
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
          key={i}
          id={i}
          json={this.props.json}
          updateJSON={this.props.updateJSON}
        />
      )}
      {this.props.json.projectors.map((e,i) =>
        <Projector
          key={i}
          id={i}
          json={this.props.json}
          updateJSON={this.props.updateJSON}
        />
      )}
      <button
        className="add-kinect"
        onClick={this.addKinect.bind(this)}
      >Add Kinect</button>
      <button
        className="add-projector"
        onClick={this.addProjector.bind(this)}
      >Add Projector</button>
    </div>);
  }
}

export default Sidebar;
