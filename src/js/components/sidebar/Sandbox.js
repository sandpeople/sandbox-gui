import React from 'react';

import '../../../css/columns.css';
import {updateSandbox, capitalize} from '../../Utils';

import WidthHeightUlInput from './WidthHeightUlInput';

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
        <WidthHeightUlInput
          prefix="sandbox"
          value={this.props.value}
          json={this.props.json}
          updateInput={this.updateInput.bind(this)}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Sandbox;
