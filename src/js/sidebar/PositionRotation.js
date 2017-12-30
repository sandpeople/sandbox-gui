import React from 'react';

import '../../css/columns.css';

export function renderUl(type) {
  return (
    <ul>
      {['x', 'y', 'z'].map(direction =>
        <li>
          <div className="row">
            <div className="col-3 center">
              {direction.toUpperCase()}:
            </div>
            <div className="col-9">
              <input
                type="number"
                name={`${this.props.className}-${type}-${direction}`}
                value={this.props.valueObj[type][direction]}
                onChange={this.props.onChange}
                step="0.1"
              >
              </input>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}

export class PositionRotation extends React.Component {
  render() {
    return (
    <div className="row">
      <div className="col-6">
        <h4>Position</h4>
        {renderUl.bind(this)('position')}
      </div>
      <div className="col-6">
        <h4>Rotation</h4>
        {renderUl.bind(this)('rotation')}
      </div>
    </div>
    );
  }
}
