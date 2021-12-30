const initTerror = (height, width) => {
  let movingDaragonImages = [
    "../assets/idle/terror-idle_0.png",
    "../assets/idle/terror-idle_1.png",
    "../assets/idle/terror-idle_2.png",
    "../assets/idle/terror-idle_3.png",
  ];
  let dragonTextures = [];
  movingDaragonImages.forEach((image) => {
    let texture = PIXI.Texture.from(image);
    dragonTextures.push(texture);
  });

  const terror = new PIXI.AnimatedSprite(dragonTextures);
  terror.x = width / 2;
  terror.y = height / 2;
  terror.vx = 0;
  terror.vy = 0;
  terror.lives = 3;
  terror.anchor.set(0.5);
  terror.scale.x = 0.5;
  terror.scale.y = 0.5;
  terror.alive = true;
  terror.scaleBase = 0.5;
  terror.animationSpeed = 0.15;
  terror.play();
  return terror;
};

const moveTerror = (terror, width, height) => {
  const terrorRight = terror.x + terror.width / 2;
  const terrorLeft = terror.x - terror.width / 2;
  const terrorTop = terror.y - terror.height / 2;
  const terrorBottom = terror.y + terror.height / 2;
  if (terrorRight + terror.vx < width && terrorLeft + terror.vx > 0) {
    terror.x = terror.x + terror.vx;
  }
  if (terrorTop + terror.vy > 0 && terrorBottom + terror.vy < height) {
    terror.y = terror.y + terror.vy;
  }
  terror.derecha = terrorRight;
  terror.izquierda = terrorLeft;
  terror.arriba = terrorTop;
  terror.abajo = terrorBottom;
};
