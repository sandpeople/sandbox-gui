import * as THREE from 'three';

import CONSTANTS from '../CONSTANTS';
import {
  updateArrayElement,
  updateTHREEEuler,
  updateTHREEVector3,
  arrayRemove} from './Utils';

export function updateKinect(json, i, merge, updateJSON) {
  updateArrayElement(
    json,
    'kinects',
    i,
    merge,
    updateJSON);
}

/**
 * Allows you to update the position of a specific kinect.
 * @param  {Object} json
 *         The root json object of our camera/kinect/
 *         sandbox elements and their positions.
 * @param  {Integer} i
 *         Index/id of kinect to update.
 * @param  {Float|false} [x=false]
 *         New x position, if false, we will leave it as it is
 * @param  {Float|false}  [y=false}]
 *         New y position, if false, we will leave it as it is
 * @param  {Float|false}  [z=false}]
 *         New z position, if false, we will leave it as it is
 * @param  {Function} updateJSON
 *         updateJSON function, which got passed from
 *         App Component.
 */
export function updateKinectPosition(json, i, {x=false, y=false, z=false}, updateJSON) {
  updateKinect(
    json,
    i,
    {position: updateTHREEVector3(json.kinects[i].position, {x,y,z})},
    updateJSON);
}

export function updateKinectRotation(json, i, {x=false, y=false, z=false}, updateJSON) {
  updateKinect(
    json,
    i,
    {rotation: updateTHREEEuler(json.kinects[i].rotation, {x,y,z})},
    updateJSON);
}


export function updateKinectSize(json, i, {width=false, height=false}, updateJSON) {
  updateKinect(
    json,
    i,
    {
      width: width ? parseFloat(width) : json.kinects[i].width,
      height: height ? parseFloat(height) : json.kinects[i].height},
    updateJSON);
}


/**
 * Add a new Kinect with a specific position/rotation.
 * @param  {Object} json
 *         The root json object of our camera/kinect/
 *         sandbox elements and their positions.
 * @param {Vector3|false} [position=false]
 *         Position of the the new kinect.
 *         If set to false, use default settings
 *         from CONSTANTS.
 * @param {Euler|false} [rotation=false]
 *         Initial rotation of the new kinect.
 *         If set to false, use default settings
 *         from CONSTANTS.
 * @param  {Function} updateJSON
 *         updateJSON function, which got passed from
 *         App Component.
 */
export function addKinect(
  json,
  {position=false, rotation=false, height=false, width=false},
  updateJSON) {
  let kinects = json.kinects.slice();
  kinects.push({
    position:
      position ?
      position :
      new THREE.Vector3(
        CONSTANTS.KINECT_SPAWN_POSITION_X,
        CONSTANTS.KINECT_SPAWN_POSITION_Y,
        CONSTANTS.KINECT_SPAWN_POSITION_Z),
    rotation:
      rotation ?
      rotation :
      new THREE.Euler(
        CONSTANTS.KINECT_SPAWN_ROTATION_X,
        CONSTANTS.KINECT_SPAWN_ROTATION_Y,
        CONSTANTS.KINECT_SPAWN_ROTATION_Z),
    width: width ? width : CONSTANTS.KINECT_SPAWN_WIDTH,
    height: height ? height : CONSTANTS.KINECT_SPAWN_HEIGHT});
  updateJSON({kinects});
}


/**
 * Spawn a new Kinect with default properties.
 * You can set those default properties in CONSTANTS.js.
 * Updates App Component state and rerenders.
 * @param  {Object} json
 *         The root json object of our camera/kinect/
 *         sandbox elements and their positions.
 * @param  {Function} updateJSON
 *         updateJSON function, which got passed from
 *         App Component.
 */
export function spawnKinect(json, updateJSON) {
  addKinect(json, {}, updateJSON);
}


/**
 * Delete Kinect with index i from json
 * and update App state/force rerender.
 * @param  {Object} json
 *         The root json object of our camera/kinect/
 *         sandbox elements and their positions.
 * @param  {Integer} i
 *         Index of kinect we want to get rid of.
 * @param  {Function} updateJSON
 *         updateJSON function, which got passed from
 *         App Component.
 */
export function deleteKinect(json, i, updateJSON) {
  let kinects = arrayRemove(json.kinects, i);
  updateJSON({kinects});
}
