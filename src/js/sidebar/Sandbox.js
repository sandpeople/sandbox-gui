import React from 'react';

import {updateSandbox} from '../Utils';

class Sandbox extends React.Component {
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
    if (name ==='sandbox-width') {
      updateSandbox(json, {width:value}, updateJSON);
    } else if(name ==='sandbox-height') {
      updateSandbox(json, {height:value}, updateJSON);
    }
  }
  render() {
    return (
      <div className="sandbox">
        <h1>Sandbox</h1>
        <ul>
          <li>
            Width:
            <input
              type="number"
              name="sandbox-width"
              value={this.props.json.sandbox.width}
              onChange={this.updateInput.bind(this)}
            >
            </input>
          </li>
          <li>
            Height:
            <input
              type="number"
              name="sandbox-height"
              value={this.props.json.sandbox.height}
              onChange={this.updateInput.bind(this)}
            >
            </input>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sandbox;
