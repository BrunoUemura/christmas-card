//////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------ SETTING SCENARIO ------------------------------------------\/
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// SCENARIO CRIATION AND SETTING BACKGROUND COLOR
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2b353d);

// CAMERA CRIATION
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

// CREATING THE RENDERER AND APPENDING TO THE HTML
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// MOUSE MOVIMENTATION
const controls = new THREE.OrbitControls(camera, renderer.domElement);

////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------ GROUP CREATION ------------------------------------------\/
////////////////////////////////////////////////////////////////////////////////////////////////////////

// GROUPS CREATION
const group = new THREE.Mesh();
var floorGroup = new THREE.Mesh();
var treeGroup = new THREE.Mesh();
var giftGroup = new THREE.Mesh();
var snowManGroup = new THREE.Mesh();
var iglooGroup = new THREE.Mesh();
var snowGroup = new THREE.Mesh();
const wireframeMaterial = new THREE.MeshBasicMaterial({
  color: 0x000000,
  wireframe: true,
});

/////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------ DRAWING ------------------------------------------\/
/////////////////////////////////////////////////////////////////////////////////////////////////

// FLOOR INITIALIZE
function floor() {
  const floorGeometry = new THREE.PlaneBufferGeometry(1000, 1000);
  const floorTexture = new THREE.MeshBasicMaterial({
    color: 0xcbd6de,
    side: THREE.DoubleSide,
  });
  floorGroup = new THREE.Mesh(floorGeometry, floorTexture);

  floorGroup.material.side = THREE.DoubleSide; // back faces
  floorGroup.rotation.x = -Math.PI / 2;
}

// TREE INITIALIZE
function tree(posX, posZ) {
  const treeLeafGeometry1 = new THREE.CylinderGeometry(
    0,
    7.5,
    10,
    20,
    20,
    true
  );
  const treeLeafGeometry2 = new THREE.CylinderGeometry(0, 10, 15, 20, 20, true);
  const treeLeafGeometry3 = new THREE.CylinderGeometry(
    0,
    12.5,
    20,
    20,
    20,
    true
  );
  const treeTrunkGeometry = new THREE.CylinderGeometry(3, 3, 20, 20, 20, false);
  const leafTexture = new THREE.MeshBasicMaterial({ color: 0x698570 });
  const trunkTexture = new THREE.MeshBasicMaterial({ color: 0x543c27 });
  const posXTree1 = posX;
  const posXTree2 = -15;

  const treeGroup01 = new THREE.Mesh(treeLeafGeometry1, leafTexture);
  const wireframeLeaf01 = new THREE.Mesh(treeLeafGeometry1, wireframeMaterial);
  treeGroup01.material.side = THREE.DoubleSide; // back faces
  treeGroup01.add(wireframeLeaf01);
  treeGroup01.position.x = posXTree1;
  treeGroup01.position.y = 25;

  const treeGroup02 = new THREE.Mesh(treeLeafGeometry2, leafTexture);
  const wireframeLeaf02 = new THREE.Mesh(treeLeafGeometry2, wireframeMaterial);
  treeGroup02.add(wireframeLeaf02);
  treeGroup02.position.x = posXTree1;
  treeGroup02.position.y = 20;

  const treeGroup03 = new THREE.Mesh(treeLeafGeometry3, leafTexture);
  const wireframeLeaf03 = new THREE.Mesh(treeLeafGeometry3, wireframeMaterial);
  treeGroup03.add(wireframeLeaf03);
  treeGroup03.position.x = posXTree1;
  treeGroup03.position.y = 15;

  const treeGroup04 = new THREE.Mesh(treeTrunkGeometry, trunkTexture);
  const wireframeTrunk = new THREE.Mesh(treeTrunkGeometry, wireframeMaterial);
  treeGroup04.add(wireframeTrunk);
  treeGroup04.position.x = posXTree1;
  treeGroup04.position.y = 10;

  treeGroup.add(treeGroup01, treeGroup02, treeGroup03, treeGroup04);
  treeGroup.position.z = posZ;
}

// GIFT BOXEX
function giftBox() {
  const giftBoxGeometry01 = new THREE.BoxGeometry(4, 5, 4);
  const giftBoxTexture01 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const giftBoxGeometry02 = new THREE.BoxGeometry(8, 4, 4);
  const giftBoxTexture02 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const giftBoxGeometry03 = new THREE.BoxGeometry(4, 8, 3);
  const giftBoxTexture03 = new THREE.MeshBasicMaterial({ color: 0x00ffff });

  const giftGroup01 = new THREE.Mesh(giftBoxGeometry01, giftBoxTexture01);
  const wireframeGiftBox01 = new THREE.Mesh(
    giftBoxGeometry01,
    wireframeMaterial
  );
  giftGroup01.add(wireframeGiftBox01);
  giftGroup01.position.x = 3;
  giftGroup01.position.y = 2.5;
  giftGroup01.position.z = -15;

  const giftGroup02 = new THREE.Mesh(giftBoxGeometry02, giftBoxTexture02);
  const wireframeGiftBox02 = new THREE.Mesh(
    giftBoxGeometry02,
    wireframeMaterial
  );
  giftGroup02.add(wireframeGiftBox02);
  giftGroup02.position.x = 10;
  giftGroup02.position.y = 2;
  giftGroup02.position.z = -8;

  const giftGroup03 = new THREE.Mesh(giftBoxGeometry03, giftBoxTexture03);
  const wireframeGiftBox03 = new THREE.Mesh(
    giftBoxGeometry03,
    wireframeMaterial
  );
  giftGroup03.add(wireframeGiftBox03);
  giftGroup03.position.x = -3;
  giftGroup03.position.y = 4;
  giftGroup03.position.z = -2;

  giftGroup.add(giftGroup01, giftGroup02, giftGroup03);
}

// "MERRY CHRISTMAS" 3D
function xmasMessage() {
  const loader = new THREE.FontLoader();
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      const geometry = new THREE.TextGeometry("MERRY CHRISTMAS!!", {
        font: font,
        size: 25,
        height: 1,
        curveSegments: 20,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3,
      });
      geometry.center();
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = -500;
      mesh.position.y = 150;
      scene.add(mesh);
    }
  );
  document.body.appendChild(renderer.domElement);
}

// NAME 3D
function studentName() {
  const loader = new THREE.FontLoader();
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      const geometry = new THREE.TextGeometry("Bruno Hideki Uemura", {
        font: font,
        size: 14,
        height: 0.5,
        curveSegments: 10,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3,
      });
      geometry.center();
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.z = -500;
      mesh.position.y = 120;
      scene.add(mesh);
    }
  );
  document.body.appendChild(renderer.domElement);
}

// SNOWMAN
function snowMan() {
  const snowManGeometry01 = new THREE.SphereGeometry(5, 20);
  const snowManGeometry02 = new THREE.SphereGeometry(3.5, 20);
  const snowManTexture = new THREE.MeshBasicMaterial({ color: 0xf4feff });
  const snowManGeometry03 = new THREE.SphereGeometry(0.5, 20);
  const snowManEyeTexture = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const snowManNoseGeometry = new THREE.CylinderGeometry(0.8, 0.1, 3, 32);
  const noseTexture = new THREE.MeshBasicMaterial({ color: 0xff8b00 });

  const snowManGroup01 = new THREE.Mesh(snowManGeometry01, snowManTexture);
  const wireframeSnowMan01 = new THREE.Mesh(
    snowManGeometry01,
    wireframeMaterial
  );
  snowManGroup01.add(wireframeSnowMan01);
  snowManGroup01.position.x = 23;
  snowManGroup01.position.y = 4;
  snowManGroup01.position.z = 3;

  const snowManGroup02 = new THREE.Mesh(snowManGeometry02, snowManTexture);
  const wireframeSnowMan02 = new THREE.Mesh(
    snowManGeometry02,
    wireframeMaterial
  );
  snowManGroup02.add(wireframeSnowMan02);
  snowManGroup02.position.x = 23;
  snowManGroup02.position.y = 11;
  snowManGroup02.position.z = 3;

  const snowManGroup03 = new THREE.Mesh(snowManNoseGeometry, noseTexture);
  const wireframeSnowMan03 = new THREE.Mesh(
    snowManNoseGeometry,
    wireframeMaterial
  );
  snowManGroup03.add(wireframeSnowMan03);
  snowManGroup03.rotation.x = 300;
  snowManGroup03.position.x = 23;
  snowManGroup03.position.y = 11;
  snowManGroup03.position.z = 7.5;

  const snowManGroup04 = new THREE.Mesh(snowManGeometry03, snowManEyeTexture);
  const wireframeSnowMan04 = new THREE.Mesh(
    snowManGeometry03,
    wireframeMaterial
  );
  snowManGroup04.add(wireframeSnowMan04);
  snowManGroup04.position.x = 24.5;
  snowManGroup04.position.y = 12;
  snowManGroup04.position.z = 6;

  const snowManGroup05 = new THREE.Mesh(snowManGeometry03, snowManEyeTexture);
  const wireframeSnowMan05 = new THREE.Mesh(
    snowManGeometry03,
    wireframeMaterial
  );
  snowManGroup05.add(wireframeSnowMan05);
  snowManGroup05.position.x = 21.5;
  snowManGroup05.position.y = 12;
  snowManGroup05.position.z = 6;

  snowManGroup.add(
    snowManGroup01,
    snowManGroup02,
    snowManGroup03,
    snowManGroup04,
    snowManGroup05
  );
}

// IGLOO
function igloo() {
  const iglooGeometry01 = new THREE.SphereGeometry(30, 20);
  const iglooGeometry02 = new THREE.CylinderGeometry(13, 15, 15, 15, 20);
  const iglooGeometry03 = new THREE.CylinderGeometry(9, 12, 15, 15);
  const iglooTexture01 = new THREE.MeshBasicMaterial({ color: 0xf4feff });
  const iglooTexture02 = new THREE.MeshBasicMaterial({ color: 0xb2894c });

  const iglooGroup01 = new THREE.Mesh(iglooGeometry01, iglooTexture01);
  const wireframeIgloo01 = new THREE.Mesh(iglooGeometry01, wireframeMaterial);
  iglooGroup01.add(wireframeIgloo01);
  iglooGroup01.position.x = -15;
  iglooGroup01.position.y = 4;
  iglooGroup01.position.z = -100;

  const iglooGroup02 = new THREE.Mesh(iglooGeometry02, iglooTexture01);
  const wireframeIgloo02 = new THREE.Mesh(iglooGeometry02, wireframeMaterial);
  iglooGroup02.add(wireframeIgloo02);
  iglooGroup02.rotation.x = 300;
  iglooGroup02.rotation.z = 450;
  iglooGroup02.position.x = 5;
  iglooGroup02.position.y = 2;
  iglooGroup02.position.z = -80;

  const iglooGroup03 = new THREE.Mesh(iglooGeometry03, iglooTexture02);
  const wireframeIgloo03 = new THREE.Mesh(iglooGeometry03, wireframeMaterial);
  iglooGroup03.add(wireframeIgloo03);
  iglooGroup03.rotation.x = 300;
  iglooGroup03.rotation.z = 450;
  iglooGroup03.position.x = 5;
  iglooGroup03.position.y = 2;
  iglooGroup03.position.z = -80;

  iglooGroup.add(iglooGroup01, iglooGroup02, iglooGroup03);
}

// SNOW
function snow() {
  const snowGeometry = new THREE.SphereGeometry(0.5, 10, 10);
  const sphereTexture = new THREE.MeshBasicMaterial({ color: 0xffffff });

  if (true) {
    const snowGroup1 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup1.material.side = THREE.DoubleSide;
    snowGroup1.position.x = -15;
    snowGroup1.position.y = 10;
    snowGroup1.position.z = 10;

    const snowGroup2 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup2.material.side = THREE.DoubleSide;
    snowGroup2.position.x = -8;
    snowGroup2.position.y = 6;
    snowGroup2.position.z = 3;

    const snowGroup3 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup3.material.side = THREE.DoubleSide;
    snowGroup3.position.x = 13;
    snowGroup3.position.y = 8;
    snowGroup3.position.z = -6;

    const snowGroup4 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup4.material.side = THREE.DoubleSide;
    snowGroup4.position.x = 16;
    snowGroup4.position.y = 8;
    snowGroup4.position.z = -12;

    const snowGroup5 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup5.material.side = THREE.DoubleSide;
    snowGroup5.position.x = -12;
    snowGroup5.position.y = 8;
    snowGroup5.position.z = -8;

    const snowGroup6 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup6.material.side = THREE.DoubleSide;
    snowGroup6.position.x = -6;
    snowGroup6.position.y = 20;
    snowGroup6.position.z = -7;

    const snowGroup7 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup7.material.side = THREE.DoubleSide;
    snowGroup7.position.x = 16;
    snowGroup7.position.y = 23;
    snowGroup7.position.z = -16;

    const snowGroup8 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup8.material.side = THREE.DoubleSide;
    snowGroup8.position.x = 0;
    snowGroup8.position.y = 5;
    snowGroup8.position.z = -9;

    const snowGroup9 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup9.material.side = THREE.DoubleSide;
    snowGroup9.position.x = 12;
    snowGroup9.position.y = 30;
    snowGroup9.position.z = 8;

    const snowGroup10 = new THREE.Mesh(snowGeometry, sphereTexture);
    snowGroup10.material.side = THREE.DoubleSide;
    snowGroup10.position.x = 9;
    snowGroup10.position.y = 27;
    snowGroup10.position.z = 12;

    snowGroup.add(
      snowGroup1,
      snowGroup2,
      snowGroup3,
      snowGroup4,
      snowGroup5,
      snowGroup6,
      snowGroup7,
      snowGroup8,
      snowGroup9,
      snowGroup10
    );
    snowGroup.position.x = posX;
  }
  snowGroup.position.y = posX;
}
