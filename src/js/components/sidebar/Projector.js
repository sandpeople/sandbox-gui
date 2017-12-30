import React from 'react';

import '../../../css/sidebar/PositionRotationWidthHeightElement.css';
import XYZUlInput from './XYZUlInput';
import {PositionRotation} from './PositionRotation';
import WidthHeightUlInput from './WidthHeightUlInput';
import {
  updateProjectorPosition,
  deleteProjector,
  updateProjectorRotation,
  updateProjectorSize,
  updateProjectorPovPosition} from '../../UtilsProjector';

class Projector extends React.Component {
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
    if (name ==='projector-position-x') {
      updateProjectorPosition(json, this.id, {x:value}, updateJSON);
    } else if(name ==='projector-position-y') {
      updateProjectorPosition(json, this.id, {y:value}, updateJSON);
    } else if(name ==='projector-position-z') {
      updateProjectorPosition(json, this.id, {z:value}, updateJSON);
    } else if (name ==='projector-rotation-x') {
      updateProjectorRotation(json, this.id, {x:value}, updateJSON);
    } else if(name ==='projector-rotation-y') {
      updateProjectorRotation(json, this.id, {y:value}, updateJSON);
    } else if(name ==='projector-rotation-z') {
      updateProjectorRotation(json, this.id, {z:value}, updateJSON);
    } else if(name === 'projector-width') {
      updateProjectorSize(json, this.id, {width:value}, updateJSON);
    } else if(name === 'projector-height') {
      updateProjectorSize(json, this.id, {height:value}, updateJSON);
    } else if (name ==='projector-positionPov-x') {
      updateProjectorPovPosition(json, this.id, {x:value}, updateJSON);
    } else if(name ==='projector-positionPov-y') {
      updateProjectorPovPosition(json, this.id, {y:value}, updateJSON);
    } else if(name ==='projector-positionPov-z') {
      updateProjectorPovPosition(json, this.id, {z:value}, updateJSON);
    }
  }

  delete() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    deleteProjector(json, this.id, updateJSON);
  }

  render() {
    return (
      <div className="projector">
        <div className="titlebar">
          <h1>{'projector' + (this.id + 1)}</h1>
          <button onClick={this.delete.bind(this)}>X</button>
        </div>
        <div className="row">
          <div className="col-6">
            <h4>Size</h4>
            <WidthHeightUlInput
              prefix="projector"
              valueObj={this.props.json.projectors[this.id]}
              json={this.props.json}
              updateInput={this.updateInput.bind(this)}
              onChange={this.props.onChange}
            />
          </div>
          <div className="col-6">
            <h4>POV Position</h4>
            <XYZUlInput
              className="projector"
              sense="positionPov"
              valueObj={this.props.json.projectors[this.id]}
              onChange={this.updateInput.bind(this)}
            />
          </div>
        </div>
        <PositionRotation
          className="projector"
          valueObj={this.props.json.projectors[this.id]}
          onChange={this.updateInput.bind(this)}
        />
      </div>
    );
  }
}

export default Projector;
