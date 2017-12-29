import React from 'react';
import React3 from 'react-three-renderer';

import Camera from './render/Camera';
import Sandbox from './render/Sandbox';
import Kinect from './render/Kinect';

/**
 * This Component translates the Calibration JSON into a 3D View.
 * @extends React
 */
class RenderJSON extends React.Component {
  /**
   * This method is needed to pass the trigger for manual rendering to
   * the parent scope.
   * @param  {Function} trigger
   *         Trigger function for threejs. Call it to render the next frame.
   */
  _onManualRenderTriggerCreated(trigger) {
    this._renderTrigger = trigger;
    this.props.getManualRenderTrigger(trigger);
  }

  componentDidMount() {
    // render one frame to show initial scene
    this._renderTrigger();
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    return (
    <div className="render">
      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}

        forceManualRender={true}
        onManualRenderTriggerCreated={this._onManualRenderTriggerCreated.bind(this)}
      >
        <scene>
          <Camera json={this.props.json} aspect={width/height}/>
          <Sandbox json={this.props.json}/>
          {this.props.json.kinects.map((e,i) =>
            <Kinect
              key={i}
              id={i}
              json={this.props.json}
            />
          )}
        </scene>
      </React3>
    </div>);
  }
}

export default RenderJSON;
