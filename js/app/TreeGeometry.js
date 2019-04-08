define( ["three","scene","material"], function(THREE, scene, material2) {
   function TreeGeometry() {
       this.geometry= null;
   }

   TreeGeometry.prototype.loadGeometry= function() {
       var that = this;
       var loader = new THREE.JSONLoader();

       loader.load("js/model/tree.json", function (geometry, material) {
           var tree = new THREE.Mesh(geometry, material2.treeMaterial);
           tree.scale.set(0.4,0.4,0.4);
           tree.castShadow = true;
           tree.position.set(15,0,15);
           scene.add(tree);
       },"js/textures");
   };

    //We don't want to use ajax request all the time for the JSON data , but maybe a refactor would be nice here
    TreeGeometry.prototype.getTreeGeometry = function () {
        return this.geometry;
    };

    return TreeGeometry;
});
