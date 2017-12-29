import * as THREE from 'three';
import {without} from 'lodash';

import CONSTANTS from '../CONSTANTS';

export function updateTHREEEuler(euler, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Euler, euler, {x,y,z});
}

export function updateTHREEVector3(vector3, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Vector3, vector3, {x,y,z});
}

export function updateTHREE(fnc, instance, {x=false, y=false, z=false}) {
  x = x !==false ? parseFloat(x) : instance.x;
  y = y !==false ? parseFloat(y) : instance.y;
  z = z !==false ? parseFloat(z) : instance.z;
  return new fnc(x,y,z);
}

export function updateCameraPosition(json, {x=false, y=false, z=false}, updateJSON) {
  let cameraPosition = json.camera.position;
  let updatedCameraPosition = updateTHREEVector3(cameraPosition, {x,y,z});
  console.log('abc', cameraPosition, updatedCameraPosition);
  updateJSON({camera: {rotation: json.camera.rotation, position: updatedCameraPosition}});
}


export function updateCameraRotation(json, {x=false, y=false, z=false}, updateJSON) {
  let cameraRotation = json.camera.rotation;
  let updatedCameraRotation = updateTHREEEuler(cameraRotation, {x,y,z});
  updateJSON({camera: {position: json.camera.position, rotation: updatedCameraRotation}});
}

export function updateKinectPosition(json, i, {x=false, y=false, z=false}, updateJSON) {
  let kinects = json.kinects.slice();
  let kinectPosition = kinects[i].position;
  let updatedKinectPosition = updateTHREEVector3(kinectPosition, {x,y,z});
  kinects[i].position = updatedKinectPosition;
  updateJSON({kinects});
}

export function updateKinectRotation(json, i, {x=false, y=false, z=false}, updateJSON) {
  let kinects = json.kinects.slice();
  let kinectRotation = kinects[i].rotation;
  let updatedKinectRotation = updateTHREEEuler(kinectRotation, {x,y,z});
  kinects[i].rotation = updatedKinectRotation;
  updateJSON({kinects});
}

export function updateSandbox(json, {width=false, height=false}, updateJSON) {
  width = width ? width : json.sandbox.width;
  height = height ? height : json.sandbox.height;
  let updatedSandbox = {width, height};
  updateJSON({sandbox:updatedSandbox});
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
  {position=false, rotation=false},
  updateJSON) {
  let kinects = json.kinects.slice();
  kinects.push({
    position:
      position ?
      position :
      new THREE.Vector3(
        CONSTANTS.CAMERA_SPAWN_POSITION_X,
        CONSTANTS.CAMERA_SPAWN_POSITION_Y,
        CONSTANTS.CAMERA_SPAWN_POSITION_Z),
    rotation:
      rotation ?
      rotation :
      new THREE.Euler(
        CONSTANTS.CAMERA_SPAWN_ROTATION_X,
        CONSTANTS.CAMERA_SPAWN_ROTATION_Y,
        CONSTANTS.CAMERA_SPAWN_ROTATION_Z)});
  updateJSON({kinects});
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
 * Removes array without index i. Returns a new array.
 * Example:
 * > arrayRemove(['a', 'b', 'c'], 1)
 * ['a', 'c']
 * @param  {Array} array
 * @param  {Integer} i
 * @return {Array}
 */
export function arrayRemove(array, removeIndex) {
  let narray = [];
  for(let i=0;i<array.length;i++) {
    if(i != removeIndex) narray.push(array[i]);
  }
  return narray;
}
