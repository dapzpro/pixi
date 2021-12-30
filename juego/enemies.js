const initAbeja = (height, width) => {
  let movingAbejasImages = [
    "../assets/abeja/1.png",
    "../assets/abeja/2.png",
    "../assets/abeja/3.png",
    "../assets/abeja/4.png",
    "../assets/abeja/5.png",
    "../assets/abeja/6.png",
  ];
  let abejaTextures = [];
  movingAbejasImages.forEach((image) => {
    let texture = PIXI.Texture.from(image);
    abejaTextures.push(texture);
  });
  const abeja = new PIXI.AnimatedSprite(abejaTextures);
  abeja.x = 200;
  abeja.y = height / 2;
  abeja.vx = 3.5;
  abeja.anchor.set(0.5);
  abeja.scale.x = 0.2 * -1;
  abeja.scale.y = 0.2;
  abeja.animationSpeed = 0.15;

  abeja.play();
  return abeja;
};

const moveAbeja = (abeja, width) => {
  const abejaRight = abeja.x + abeja.width / 2;
  const abejaLeft = abeja.x - abeja.width / 2;
  const abejaTop = abeja.y - abeja.height / 2;
  const abejaBottom = abeja.y + abeja.height / 2;
  if (abejaRight + abeja.vx < width && abejaLeft + abeja.vx > 0) {
    abeja.x = abeja.x + abeja.vx;
  }
  if (abejaLeft + abeja.vx <= 0 || abejaRight + abeja.vx >= width) {
    abeja.scale.x *= -1;
    abeja.vx *= -1;
  }
  abeja.derecha = abejaRight;
  abeja.izquierda = abejaLeft;
  abeja.arriba = abejaTop;
  abeja.abajo = abejaBottom;
};

const choque = (abeja, terror) => {
  const abejaRigthTouchesTerror =
    abeja.derecha >= terror.izquierda && abeja.derecha <= terror.derecha;

  const abejaBottomTouchesTerror =
    abeja.abajo <= terror.abajo && abeja.abajo >= terror.arriba;

  const abejaTopTocuhesTerror =
    abeja.arriba <= terror.abajo && abeja.arriba >= terror.arriba;

  const abejaLeftTouchesTerror =
    abeja.izquierda <= terror.derecha && abeja.izquierda >= terror.izquierda;

  const firstCondition = abejaRigthTouchesTerror && abejaBottomTouchesTerror;
  const secondCondition = abejaRigthTouchesTerror && abejaTopTocuhesTerror;
  const thirdCondition = abejaLeftTouchesTerror && abejaBottomTouchesTerror;
  const fourthCondition = abejaLeftTouchesTerror && abejaTopTocuhesTerror;

  return firstCondition || secondCondition || thirdCondition || fourthCondition;
};
