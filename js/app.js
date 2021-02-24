const myVar = setInterval(myTimer, 50);

floor();
for (let i = 1; i <= 3; i++) {
  tree(30 * i, -15);
  tree(-30 * i, -15);
}
giftBox();
xmasMessage();
studentName();
snowMan();
igloo();

let count = 0;
let posX = 25;

function myTimer() {
  count += 1;
  snow();

  if (posX > 0) {
    posX -= 1;
  } else {
    posX = 25;
  }

  if (count > 30) {
    count = 0;
  }
}

// MERGING ALL PIECES
group.add(
  floorGroup,
  treeGroup,
  giftGroup,
  snowManGroup,
  iglooGroup,
  snowGroup
);

// SCENE INITIALIZE
scene.add(group);
camera.position.z = 60;
camera.position.y = 20;

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();
