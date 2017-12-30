import React from 'react';

import PositionRotationWidthHeightElement from './PositionRotationWidthHeightElement';
import {
  updateProjectorPosition,
  deleteProjector,
  updateProjectorRotation,
  updateProjectorSize} from '../../UtilsProjector';

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
    }
  }

  delete() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;
    deleteProjector(json, this.id, updateJSON);
  }

  render() {
    return (
      <PositionRotationWidthHeightElement
        className="projector"
        id={this.id}
        property="projectors"
        delete={this.delete.bind(this)}
        json={this.props.json}
        updateInput={this.updateInput.bind(this)}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Projector;
