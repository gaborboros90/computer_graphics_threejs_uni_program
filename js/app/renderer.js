define( ["three", "container"], function ( THREE, container ) {
  container.innerHTML = "";
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xaaaaff, 1.0));
  renderer.shadowCameraFov = 50;
  renderer.shadowMapWidth = 1024;
  renderer.shadowMapHeight = 1024;
  renderer.shadowMapType = THREE.PCFSoftShadowMap;;
  //renderer.shadowMap.enabled = true;
  //renderer.setPixelRatio( window.devicePixelRatio );
  container.appendChild( renderer.domElement );

  var updateSize = function () {
    renderer.setSize( container.offsetWidth, container.offsetHeight );
  };
  window.addEventListener( 'resize', updateSize, false );
  updateSize();

  window.addEventListener('keydown', function(e) {
    //renderer.shadowMap.enabled = !renderer.shadowMap.enabled;
  },false);

  return renderer;
} );
