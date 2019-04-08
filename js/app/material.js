define( ["three", "texture","houseMaterial"], function ( THREE, texture, houseMaterial ) {
  return {
    fenceMaterial: new THREE.MeshLambertMaterial({
      side: THREE.DoubleSide,
      map: texture.fence
    }),
    groundPlane: new THREE.MeshLambertMaterial({
      map: texture.grass,
      side: THREE.DoubleSide
    }),
    houseBaseMaterial: new THREE.MeshFaceMaterial(houseMaterial),
    pillar: new THREE.MeshLambertMaterial({
      color: 0x2f4f4f
    }),
    lamp: new THREE.MeshLambertMaterial({
      transparent: true,
      color: 0xB0C4DE,
      opacity: 0.4
    }),
    bulb: new THREE.MeshLambertMaterial({
      color: 0xFFFF00
    }),
    roofMaterial: new THREE.MeshLambertMaterial({
      map: texture.roof,
      side: THREE.DoubleSide
    }),
    fireWall: new THREE.MeshLambertMaterial({
      color: 0x8B4513
    }),
    wire: new THREE.MeshBasicMaterial( { wireframe: true } ),
    windmill: new THREE.MeshLambertMaterial({
      color: 0xFFF0F5
    }),
    treeMaterial: new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide
    }),
    tubeMaterial: new THREE.MeshLambertMaterial({
      color: 0xA9A9A9
    })
  };
} );
