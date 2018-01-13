

export function postToApi(stateJson) {
  console.log('asd', stateJson);
  fetch(
    `{CONFIG.apiPath}/calibration`, {
      method: 'POST',
      body: adaptStateJSONToApiJSON(stateJson)
  });
}

export function getFromApi() {
  // ToDo: We need to retrieve current calibration from restapi,
  // translate it into internal json representation and update the state in
  // App component.
}

export function adaptStateJSONToApiJSON(stateJson) {
  let apiObj = {
    sandbox: stateJson.sandbox,
    camera: {
      position: THREEVector3ToArray(stateJson.camera.position),
      roation: THREEVector3ToArray(stateJson.camera.rotation)
    },
    kinects: [],
    projectors: []
  };
  for(let kinect of stateJson.kinects) {
    apiObj.kinects.push({
      position: THREEVector3ToArray(kinect.position),
      rotation: THREEEulerToArray(kinect.rotation),
      width: kinect.width,
      height: kinect.height
    });
  }
  for(let projector of stateJson.projectors) {
    apiObj.projectors.push({
      position: THREEVector3ToArray(projector.position),
      positionPov: THREEVector3ToArray(projector.positionPov),
      rotation: THREEEulerToArray(projector.rotation),
      width: projector.width,
      height: projector.height
    });
  }

  return JSON.stringify(apiObj);
}

export function THREEVector3ToArray(vector3) {
  return [vector3.x, vector3.y, vector3.z];
}


export function THREEEulerToArray(euler) {
  return [euler.x, euler.y, euler.z];
}
