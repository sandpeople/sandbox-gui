class Frontend {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer();
  }

  init() {
    this.renderer.setSize( window.innerWidth, window.innerHeight, false );
    document.body.appendChild( this.renderer.domElement );
    this.geometry = new THREE.BoxGeometry( 1, 1, 2   );
    this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cube );

    this.camera.position.z = 10;
  }

  addCube() {

  }

  animate() {
    /*requestAnimationFrame( () => {
      this.animate();
    });*/
    this.renderer.render(this.scene, this.camera);
  }

  cameraZoomOut(scale) {
    console.log('czo before', this.camera.position.z, scale)
    this.camera.position.z +=  this.camera.position.z * scale;
    console.log('czo after', this.camera.position.z)
  }

  cameraZoomIn(scale) {
    console.log('czi before', this.camera.position.z, scale)
    this.camera.position.z += this.camera.position.z * scale;
    console.log('czi after', this.camera.position.z)
  }
}

class FrontendControls {
  constructor(frontend) {
    this.f = frontend;
  }

  bindToDom() {
    var self = this;
    bindOnChangeToProp('.menu #camera-position-x', this.f.camera.position, 'x');
    bindOnChangeToProp('.menu #camera-position-y', this.f.camera.position, 'y');
    bindOnChangeToProp('.menu #camera-position-z', this.f.camera.position, 'z');
    this.f.renderer.domElement.addEventListener( 'mousewheel', this.onMouseWheel, false );
    this.f.renderer.domElement.addEventListener( 'DOMMouseScroll', this.onMouseWheel, false ); // firefox
  }

  onMouseWheel(event) {
    var delta = 0;
    if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9
      delta = event.wheelDelta;
    } else if ( event.detail ) { // Firefox
      delta = - event.detail;
    }
    delta /= 999
    console.log(delta, self.f.camera.position.y);
    if ( delta > 0 ) {
      console.log(`onMouseWheel zoomOut delta: ${delta}`);
      self.f.cameraZoomOut(delta);
    } else {
      self.f.cameraZoomIn(delta);
      console.log(`onMouseWheel zoomIn delta: ${delta}`);
    }
  }
}

function cbBind(func, th) {
  return () => {func}
}

// Utils
function bindOnChangeToProp(selector, obj, key) {
  let sup = this;
  let domObj = $(selector);
  domObj.val(obj[key]);
  console.log(`Initiaded ${selector} with ${obj[key]}`)
  domObj.change(function() {
    let val = parseFloat($(this).val());
    console.log(`${selector} / ${obj}.${key} changed to ${val}`);
    obj[key] = val;
    //this.f.camera.position.x =
  });
  console.log(`Controls ${selector} and prop ${obj}.${key} bound to dom`);

}

function bidirectionalBind(selector, obj, key, handler) {
  selector.change(() => {

  });
}


// Main

var f, fc;

$(document).ready(() => {
  f = new Frontend();
  f.init();

  fc = new FrontendControls(f);
  fc.bindToDom();
});
