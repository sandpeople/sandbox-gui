import * as THREE from 'three';

export function updateTHREEEuler(euler, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Euler, euler, {x,y,z});
}

export function updateTHREEVector3(vector3, {x=false, y=false, z=false}) {
  return updateTHREE(THREE.Vector3, vector3, {x,y,z});
}

export function updateTHREE(fnc, instance, {x=false, y=false, z=false}) {
  x = x !== false ? parseFloat(x) : instance.x;
  y = y !== false ? parseFloat(y) : instance.y;
  z = z !== false ? parseFloat(z) : instance.z;
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

export function addKinect(json, {position=false, rotation=false, name=false}, updateJSON) {
  let kinects = json.kinects.slice();
  kinects.push({
    position: position ? position : new THREE.Vector3(0,0,0),
    rotation: rotation ? rotation : new THREE.Euler(),
    name: name ? name : 'kinect' + (kinects.length + 1)
  });
  updateJSON({kinects});
}

export function deleteKinect(json, i, updateJSON) {
  let kinects = json.kinects.slice();
  delete kinects[i];
  updateJSON({kinects});
}
