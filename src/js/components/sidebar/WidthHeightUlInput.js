import React from 'react';

import '../../../css/sidebar/XYZUlInput.css';
import {capitalize} from '../../Utils';

export class WidthHeightUlInput extends React.Component {
  render() {
    return (
      <div className="width-height-ul-input">
        <ul>
          {['width', 'height'].map((k) =>
            <li key={k}>
              <div className="row">
                <div className="col-6">
                  {capitalize(k)}:
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    name={`${this.props.prefix}-${k}`}
                    value={this.props.valueObj[k]}
                    onChange={this.props.updateInput}
                  >
                  </input>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default WidthHeightUlInput;
