define( ["three", "texture"], function ( THREE, texture ) {
    var houseMaterialArray = [];

    houseMaterialArray.push(new THREE.MeshPhongMaterial({
        map: texture.wallWithWindows,
        side: THREE.DoubleSide
    }));

    houseMaterialArray.push(new THREE.MeshPhongMaterial({
        map: texture.wallWithWindows,
        side: THREE.DoubleSide
    }));


    houseMaterialArray.push(new THREE.MeshPhongMaterial({
        map: texture.wall,
        bumpMap:texture.wallBumpMap,
        side: THREE.DoubleSide
    }));

    houseMaterialArray.push(new THREE.MeshPhongMaterial({
        map: texture.wall,
        bumpMap:texture.wallBumpMap,
        side: THREE.DoubleSide
    }));

    houseMaterialArray.push(new THREE.MeshPhongMaterial({
        map: texture.wallWithDoor,
        side: THREE.DoubleSide
    }));

    houseMaterialArray.push(new THREE.MeshPhongMaterial({
        map: texture.wall,
        bumpMap:texture.wallBumpMap,
        side: THREE.DoubleSide
    }));

    return houseMaterialArray;
});