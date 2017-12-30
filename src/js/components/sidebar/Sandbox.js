import React from 'react';

import '../../../css/columns.css';

import {updateSandbox, capitalize} from '../../Utils';


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
          {['width', 'height'].map((k) =>
            <li key={k}>
              <div className="row">
                <div className="col-6">
                  {capitalize(k)}:
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    name={'sandbox-' + k}
                    value={this.props.json.sandbox[k]}
                    onChange={this.updateInput.bind(this)}
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

export default Sandbox;
