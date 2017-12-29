import React from 'react';

import '../../css/sidebar/splitted-xyz-rot.css';

class PositionRotation extends React.Component {
  render() {
    return (
    <div className="splitted-xyz-rot">
      <div className="xyz">
        <h4>Position</h4>
        <ul>
          <li>
            X:
            <input
              type="number"
              name={this.props.className + '-position-x'}
              value={this.props.valueObj.position.x}
              onChange={this.props.onChange}
            >
            </input>
          </li>
          <li>
            Y:
            <input
              type="number"
              name={this.props.className + '-position-y'}
              value={this.props.valueObj.position.y}
              onChange={this.props.onChange}
            >
            </input>
          </li>
          <li>
            Z:
            <input
              type="number"
              name={this.props.className + '-position-z'}
              value={this.props.valueObj.position.z}
              onChange={this.props.onChange}
            >
            </input>
          </li>
        </ul>
      </div>
      <div className="rot">
        <h4>Rotation</h4>
        <ul>
          <li>
            X:
            <input
              type="number"
              name={this.props.className + '-rotation-x'}
              step="0.1"
              value={this.props.valueObj.rotation.x}
              onChange={this.props.onChange}
            >
            </input>
          </li>
          <li>
            Y:
            <input
              type="number"
              name={this.props.className + '-rotation-y'}
              step="0.1"
              value={this.props.valueObj.rotation.y}
              onChange={this.props.onChange}
            >
            </input>
          </li>
          <li>
            Z:
            <input
              type="number"
              name={this.props.className + '-rotation-z'}
              step="0.1"
              value={this.props.valueObj.rotation.z}
              onChange={this.props.onChange}
            >
            </input>
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default PositionRotation;
