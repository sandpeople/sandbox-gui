import * as THREE from 'three';

import CONSTANTS from '../CONSTANTS';

/**
 * Allows you to create a new THREE.Euler based on an euler object but with
 * modified xyz values.
 * Original euler won't get mutated, we return a new Euler.
 * @param  {THREE.Euler}  euler
 *         Euler to take unchanged values for xyz from.
 * @param  {Float|false} [x=false]
 *         New X coordinate, if false, use x from passed euler.
 * @param  {Float|false} [y=false]
 *         New Y coordinate, if false, use y from passed euler.
 * @param  {Float|false}  [z=false}]
 *         New Z coordinate, if false, use z from passed euler.
 * @return {THREE.Euler}
 */
export function updateTHREEEuler(euler, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Euler, euler, {x,y,z});
}

/**
 * Allows you to create a new THREE.Vector3 based on an vector3 object but with
 * modified xyz values.
 * Original vector3 won't get mutated, we return a new Vector3.
 * @param  {THREE.Vector3}  euler
 *         Euler to take unchanged values for xyz from.
 * @param  {Float|false} [x=false]
 *         New X coordinate, if false, use x from passed euler.
 * @param  {Float|false} [y=false]
 *         New Y coordinate, if false, use y from passed euler.
 * @param  {Float|false}  [z=false}]
 *         New Z coordinate, if false, use z from passed euler.
 * @return {THREE.Vector3}
 */
export function updateTHREEVector3(vector3, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Vector3, vector3, {x,y,z});
}

/**
 * Helper Function to easily update THREE.Euler|THREE.Vector3.
 * @param  {Function}  fnc
 *         Do we want to update a vector or an euler.
 *         Should normally be THREE.Euler or THREE.Vector3, just pass the
 *         reference to the class.
 * @param  {THREE.Euler|THREE.Vector3}  instance
 *         An instance of an existing euler/vector.
 * @param  {Float|false} [x=false]
 *         New X coordinate, if false, use x from passed instance.
 * @param  {Float|false} [y=false]
 *         New Y coordinate, if false, use y from passed instance.
 * @param  {Float|false}  [z=false}]
 *         New Z coordinate, if false, use z from passed instance.
 * @return {THREE.Euler|THREE.Vector3|Object}
 *         Return a new instance of fnc.
 */
export function updateTHREE(fnc, instance, {x=false, y=false, z=false}) {
  x = x !==false ? parseFloat(x) : instance.x;
  y = y !==false ? parseFloat(y) : instance.y;
  z = z !==false ? parseFloat(z) : instance.z;
  return new fnc(x,y,z);
}

/**
 * Allows you to update the position of the camera.
 * @param  {Object} json
 *         The root json object of our camera/kinect/
 *         sandbox elements and their positions.
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

export function updateArrayElement(json, key, i, merge, updateJSON) {
  let elements = json[key].slice();
  let updatedElement = Object.assign({}, elements[i], merge);
  elements[i] = updatedElement;
  updateJSON({[key]: elements});

}



/**
 * Allows you to update height and/or width of Sandbox.
 * @param  {Object} json
 *         The root json object of our camera/kinect/
 *         sandbox elements and their positions.
 * @param  {Float|false} [width=false]
 *         New width, if false, we won't change width
 * @param  {Float|false}  [height=false}]
 *         New height, if false, we won't change height
 * @param  {Function} updateJSON
 *         updateJSON function, which got passed from
 *         App Component.
 */
export function updateSandbox(json, {width=false, height=false}, updateJSON) {
  width = width ? parseFloat(width) : json.sandbox.width;
  height = height ? parseFloat(height) : json.sandbox.height;
  let updatedSandbox = {width, height};
  updateJSON({sandbox:updatedSandbox});
}

/**
 * Returns a new array, where it contains all elements of arr, except of that
 * with index === removeIndex.
 * Example:
 * > arrayRemove(['a', 'b', 'c'], 1)
 * ['a', 'c']
 * @param  {Array} arr
 * @param  {Integer} i
 * @return {Array}
 */
export function arrayRemove(arr, removeIndex) {
  let narray = [];
  for(let i=0;i<arr.length;i++) {
    if(i !== removeIndex) narray.push(arr[i]);
  }
  return narray;
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
