import * as THREE from 'three';

import CONSTANTS from '../CONSTANTS';
import {
  updateArrayElement,
  updateTHREEEuler,
  updateTHREEVector3,
  arrayRemove} from './Utils';

export function updateProjector(json, i, merge, updateJSON) {
  updateArrayElement(
    json,
    'projectors',
    i,
    merge,
    updateJSON);
}

export function updateProjectorPosition(json, i, {x=false, y=false, z=false}, updateJSON) {
  updateProjector(
    json,
    i,
    {position: updateTHREEVector3(json.projectors[i].position, {x,y,z})},
    updateJSON);
}

export function updateProjectorRotation(json, i, {x=false, y=false, z=false}, updateJSON) {
  updateProjector(
    json,
    i,
    {rotation: updateTHREEEuler(json.projectors[i].rotation, {x,y,z})},
    updateJSON);
}


export function updateProjectorSize(json, i, {width=false, height=false}, updateJSON) {
  updateProjector(
    json,
    i,
    {
      width: width ? parseFloat(width) : json.projectors[i].width,
      height: height ? parseFloat(height) : json.projectors[i].height},
    updateJSON);
}

export function addProjector(
  json,
  {position=false, rotation=false, height=false, width=false, positionPov=false},
  updateJSON) {
  let projectors = json.projectors.slice();
  projectors.push({
    position:
      position ?
      position :
      new THREE.Vector3(
        CONSTANTS.PROJECTOR_SPAWN_POSITION_X,
        CONSTANTS.PROJECTOR_SPAWN_POSITION_Y,
        CONSTANTS.PROJECTOR_SPAWN_POSITION_Z),
    rotation:
      rotation ?
      rotation :
      new THREE.Euler(
        CONSTANTS.PROJECTOR_SPAWN_ROTATION_X,
        CONSTANTS.PROJECTOR_SPAWN_ROTATION_Y,
        CONSTANTS.PROJECTOR_SPAWN_ROTATION_Z),
    width: width ? width : CONSTANTS.PROJECTOR_SPAWN_WIDTH,
    height: height ? height : CONSTANTS.PROJECTOR_SPAWN_HEIGHT,
    positionPov:
      positionPov ?
      positionPov :
      new THREE.Euler(
        CONSTANTS.PROJECTOR_SPAWN_POSITION_POV_X,
        CONSTANTS.PROJECTOR_SPAWN_POSITION_POV_Y,
        CONSTANTS.PROJECTOR_SPAWN_POSITION_POV_Z)});
  updateJSON({projectors});
}

export function spawnProjector(json, updateJSON) {
  addProjector(json, {}, updateJSON);
}

export function deleteProjector(json, i, updateJSON) {
  let projectors = arrayRemove(json.projectors, i);
  updateJSON({projectors});
}
