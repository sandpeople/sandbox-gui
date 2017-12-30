import React from 'react';

import XYZUlInput from './XYZUlInput';
import '../../../css/columns.css';

export class PositionRotation extends React.Component {
  render() {
    return (
    <div className="row">
      <div className="col-6">
        <h4>Position</h4>
        <XYZUlInput
          className={this.props.className}
          sense="position"
          valueObj={this.props.valueObj}
          onChange={this.props.onChange}
        />
      </div>
      <div className="col-6">
        <h4>Rotation</h4>
        <XYZUlInput
          className={this.props.className}
          sense="rotation"
          valueObj={this.props.valueObj}
          onChange={this.props.onChange}
        />
      </div>
    </div>
    );
  }
}
