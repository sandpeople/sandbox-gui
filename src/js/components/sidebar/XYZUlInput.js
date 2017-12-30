import React from 'react';

import '../../../css/sidebar/XYZUlInput.css';

export class XYZUlInput extends React.Component {
  render() {
    return (
      <div className="xyz-ul-input">
        <ul>
          {['x', 'y', 'z'].map(direction =>
            <li key={direction}>
              <div className="row">
                <div className="col-3 center">
                  {direction.toUpperCase()}:
                </div>
                <div className="col-9">
                  <input
                    type="number"
                    name={`${this.props.className}-${this.props.sense}-${direction}`}
                    value={this.props.valueObj[this.props.sense][direction]}
                    onChange={this.props.onChange}
                    step="0.1"
                  >
                  </input>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }

}

export default XYZUlInput;
