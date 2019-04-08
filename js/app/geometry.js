define( ["three","firewallShape"], function ( THREE, FirewallShape ) {
  return {
    groundPlane: new THREE.PlaneGeometry( 100, 100),
    fenceGeometry: new THREE.CubeGeometry(0.5,8,100),
    houseBase: new THREE.CubeGeometry(50,20,30),
    pillar: new THREE.CylinderGeometry(0.5,0.5,30),
    lamp: new THREE.SphereGeometry(3),
    bulb: new THREE.SphereGeometry(1),
    roof: new THREE.PlaneGeometry(56, 29.5),
    firewall: new FirewallShape().extrudeShape(),
    windmill: new THREE.CubeGeometry(1,14,1),
    selectCircle: new THREE.CircleGeometry(30,20)
  };
} );
