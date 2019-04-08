define( ["three"], function ( THREE ) {
    function FirewallShape() {
        this.shape = null;
        this.shapeGeometry = null;
        this.horizontalCoordinate = 12.8;
        this.verticalCoordinate = 6.3;
    }

    FirewallShape.prototype.createShape = function () {
        this.shape = new THREE.Shape();

        this.shape.moveTo( -this.horizontalCoordinate, -this.verticalCoordinate);
        this.shape.lineTo( 0, this.verticalCoordinate);
        this.shape.lineTo( this.horizontalCoordinate, -this.verticalCoordinate);
        this.shape.lineTo( -this.horizontalCoordinate, -this.verticalCoordinate);

        return this.shape;
    };

    FirewallShape.prototype.extrudeShape = function() {
        var options = {
            amount: 10,
            bevelThickness: 2,
            bevelSize: 1,
            bevelSegments: 3,
            bevelEnabled: true,
            curveSegments: 12,
            steps: 1
        };

        return new THREE.ExtrudeGeometry(this.createShape(),options);
    };

    return FirewallShape;
});