define( ["three", "scene"], function ( THREE, scene ) {
  var ambientLight = new THREE.AmbientLight({
    color: 0x808080
  });

  var hemisphereLight = new THREE.HemisphereLight(0x00ff00, 0x0000ff, 1);
  hemisphereLight.position.set(0, 500, 0);

  var pointColor = "#ffffff";
  var lampLight = new THREE.SpotLight(pointColor);
  lampLight.position.set(50, 50, 50);
  lampLight.castShadow = true;

  return {
    hemisphereLight: hemisphereLight,
    lampLight: lampLight,
    ambientLight: ambientLight
  };

});
