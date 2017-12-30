import React from 'react';

import '../../../css/sidebar/PositionRotationWidthHeightElement.css';

import {PositionRotation} from './PositionRotation';
import WidthHeightUlInput from './WidthHeightUlInput';

class PositionRotationWidthHeightElement extends React.Component {
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
  }

  delete() {
    let json = this.props.json;
    let updateJSON = this.props.updateJSON;

  }

  render() {
    return (
      <div className="position-rotation-height-width">
        <div className="titlebar">
          <h1>{this.props.className + (this.id + 1)}</h1>
          <button onClick={this.props.delete}>X</button>
        </div>
        <WidthHeightUlInput
          prefix={this.props.className}
          valueObj={this.props.json[this.props.property][this.id]}
          json={this.props.json}
          updateInput={this.props.updateInput}
          onChange={this.props.onChange}
        />
        <PositionRotation
          className={this.props.className}
          valueObj={this.props.json[this.props.property][this.id]}
          onChange={this.props.updateInput}
        />
      </div>
    );
  }
}

export default PositionRotationWidthHeightElement;
