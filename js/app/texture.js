define( ["three"], function ( THREE ) {
  var texturePath = "js/textures/";

  return {
    grass: new THREE.ImageUtils.loadTexture(texturePath + "grass.png"),
    fence: new THREE.ImageUtils.loadTexture(texturePath +   "kerites.jpg" ),
    wall: new THREE.ImageUtils.loadTexture(texturePath +   "brickwork-texture-wall.jpg"),
    wallWithDoor: new THREE.ImageUtils.loadTexture(texturePath +   + "brickwork-texture-door.jpg"),
    wallWithWindows: new THREE.ImageUtils.loadTexture(texturePath +  "brickwork-texture-window.jpg"),
    wallBumpMap: new THREE.ImageUtils.loadTexture(texturePath +  "brickwork-bump-map.jpg"),
    roof: new THREE.ImageUtils.loadTexture(texturePath +  "roof.jpg")
  };
});
