define( ["three", "camera", "controls", "geometry", "light", "material", "renderer", "scene", "TreeGeometry", "Channel"],
function ( THREE, camera, controls, geometry, light, material, renderer, scene, TreeGeometry, Channel ) {
  var mouse = new THREE.Vector2();

  function onMouseMove( event ) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  }

  function createFence(name, translateX, translateY, translateZ) {
    var fence = new THREE.Mesh(geometry.fenceGeometry, material.fenceMaterial);
    fence.translateX(translateX);
    fence.translateY(translateY);
    fence.translateZ(translateZ);

    if(name === "northFence" || name === "southFence")
      fence.rotation.y = Math.PI / 2;

    fence.name = name;
    fence.castShadow = true;
    scene.add (fence);
    app.meshes.push(fence);
  }

  function createHouse() {
    var houseBase = new THREE.Mesh(geometry.houseBase,material.houseBaseMaterial);
    houseBase.castShadow = true;
    houseBase.position.set(-20,11,-30);
    houseBase.name = "houseBase";
    scene.add(houseBase);


    var leftRoofPlane = new THREE.Mesh(geometry.roof,material.roofMaterial);
    leftRoofPlane.position.set(-20,26,-20);
    leftRoofPlane.rotation.x = -Math.PI/4;
    scene.add(leftRoofPlane);


    var rightRoofPlane = new THREE.Mesh(geometry.roof,material.roofMaterial);
    rightRoofPlane.position.set(-20,26,-40);
    rightRoofPlane.rotation.x = Math.PI/4;
    scene.add(rightRoofPlane);


    var frontFireWall = new THREE.Mesh(geometry.firewall, material.fireWall);
    frontFireWall.position.set(-5,28,-30);
    frontFireWall.rotation.y = Math.PI /2 ;
    scene.add(frontFireWall);

    var backFireWall = new THREE.Mesh(geometry.firewall, material.fireWall);
    backFireWall.position.set(-45,28,-30);
    backFireWall.rotation.y = Math.PI /2 ;
    scene.add(backFireWall);

    var selectCircle = new THREE.Mesh(geometry.selectCircle, material.treeMaterial);
    selectCircle.position.set(-20,1.5,-30);
    selectCircle.rotation.x = -Math.PI / 2 ;
    selectCircle.name ="selector";
    selectCircle.visible = false;
    scene.add(selectCircle);
  }

  function createLampComponent(name, x,y,z) {
    var component = null;

    if(name ===  "pillar")
      component = new THREE.Mesh(geometry.pillar, material.pillar);
    else if(name === "lamp")
      component = new THREE.Mesh(geometry.lamp, material.lamp);
    else if(name === "bulb")
      component = new THREE.Mesh(geometry.bulb, material.bulb);

    component.position.set(x,y,z);
    scene.add ( component);
    app.meshes.push(component);
  }

  function createLamp() {
    createLampComponent("pillar",45,15,45);
    createLampComponent("lamp",45,30,45);
    createLampComponent("bulb",45,30,45);
  }

  function createWindmill(name, xPos, zPos) {
    var pillar = new THREE.Mesh(geometry.pillar, material.pillar);
    pillar.position.set(xPos,15,zPos);
    scene.add(pillar);

    var windMill = new THREE.Mesh(geometry.windmill, material.windmill);
    windMill.position.set(xPos+1,30,zPos);
    windMill.name = name;
    scene.add(windMill);
  }

  function createTree() {
    var tree = new TreeGeometry();
    tree.loadGeometry();
  }

  function createChannel() {
    var channelGeometry = new Channel().createChannel();
    var channelMesh = new THREE.Mesh(channelGeometry, material.tubeMaterial);
    channelMesh.position.set(5,10,-15)
    scene.add(channelMesh);
  }

  function restartEngine(parameters)
  {
    engine.destroy();
    engine = new ParticleEngine.ParticleEngine();
    engine.setValues( parameters );
    engine.initialize();
  }

  var app = {
    meshes: [],
    init: function () {
      camera.lookAt(scene.position);

      var ground = new THREE.Mesh( geometry.groundPlane, material.groundPlane );
      ground.receiveShadow = true;
      ground.rotation.x = -Math.PI/2;
      scene.add( ground );
      app.meshes.push( ground );

      createFence("westFence", 50, 3, 0);
      createFence("eastFence", -50, 3, 0);
      createFence("northFence", 0, 3, 50);
      createFence("southFence", 0, 3, -50);

      createHouse();
      createLamp();
      createWindmill("firstWindMill",-35,35);
      createWindmill("secondWindMill",45,-45);
      createTree();
      createChannel();

      window.addEventListener( 'mousemove', onMouseMove, false );


      light.lampLight.target = ground;
      //scene.add(light.ambientLight);
      scene.add(light.lampLight);
      scene.add(light.hemisphereLight);

      //var engine = new ParticleEngine.ParticleEngine();
      //engine.setValues( ParticleEngine.options.fountain );
      //engine.initialize();
    },
    animate: function () {
      window.requestAnimationFrame( app.animate );
      controls.update();
      scene.getObjectByName("firstWindMill").rotation.x += 0.03;
      scene.getObjectByName("secondWindMill").rotation.x -= 0.05;
      scene.getObjectByName("selector").visible = false;


      //raycaster.setFromCamera( mouse, camera );

      // calculate objects intersecting the picking ray
      //var intersects = raycaster.intersectObjects( scene.children );
      //
      //for ( var i = 0; i < intersects.length; i++ ) {
      //
      //  if(intersects[ i ].object.name == "houseBase") {
      //    scene.getObjectByName("selector").visible = true;
      //  }
      //
      //}

      renderer.render( scene, camera );
    }
  };
  return app;
} );
