require('should');

import * as THREE from 'three';

import * as Utils from './Utils';

describe(`updateTHREEEuler`, () => {
  it(`should update passed coordinates and keep the untouched ones`, () => {
    let euler = new THREE.Euler(42,1,13);
    let updatedEuler = Utils.updateTHREEEuler(euler, {x:3});
    updatedEuler.x.should.eql(3);
    updatedEuler.y.should.eql(1);
    updatedEuler.z.should.eql(13);
  });
  it(`should update passed coordinates and keep the untouched ones`, () => {
    let euler = new THREE.Euler(42,1,13);
    let updatedEuler = Utils.updateTHREEEuler(euler, {x:3, y:4, z:5});
    updatedEuler.x.should.eql(3);
    updatedEuler.y.should.eql(4);
    updatedEuler.z.should.eql(5);
  });
});
