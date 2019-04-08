define( ["three","scene","material"], function(THREE, scene, material2) {
    function Channel() {
        this.points = [];
        this.tubeGeometry = null;
    }
    
    Channel.prototype.createChannel = function () {
        this.points.push(new THREE.Vector3(2,-9,0));
        this.points.push(new THREE.Vector3(0,-8,0));
        this.points.push(new THREE.Vector3(0,0,0));
        this.points.push(new THREE.Vector3(0,10,0));


        this.tubeGeometry = new THREE.TubeGeometry(
            new THREE.SplineCurve3(this.points),
            64, 1, 8, false);

        return this.tubeGeometry;
    }

    return Channel;
})