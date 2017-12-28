import * as THREE from 'three';

export function updateTHREEEuler(euler, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Euler, euler, {x,y,z});
}

export function updateTHREEVector3(vector3, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Vector3, vector3, {x,y,z});
}

export function updateTHREE(fnc, instance, {x=false, y=false, z=false}) {
  x = x !== false ? x : instance.x;
  y = y !== false ? y : instance.y;
  z = z ? z : instance.z;
  return new fnc(x,y,z);
}

export function updatedCameraPosition(json, {x=false, y=false, z=false}, updateJSON) {
  let cameraPosition = json.camera.position;
  let updatedCameraPosition = updateTHREEVector3(cameraPosition, {x,y,z});
  updateJSON({camera: {position: updatedCameraPosition}});
}

export function updateKinectPosition(json, i, {x=false, y=false, z=false}, updateJSON) {
  let kinects = json.kinects.slice();
  let kinectPosition = kinects[i].position;
  let updatedKinectPosition = updateTHREEVector3(kinectPosition, {x,y,z});
  kinects[i].position = updatedKinectPosition;
  updateJSON({kinects});
}

export function updateSandbox(json, {width=false, height=false}, updateJSON) {
  width = width ? width : json.sandbox.width;
  height = height ? height : json.sandbox.height;
  let updatedSandbox = {width, height};
  updateJSON({sandbox:updatedSandbox});
}
