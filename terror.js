const initTerror = () => {
  let movingDaragonImages = [
    "./assets/idle/terror-idle_0.png",
    "./assets/idle/terror-idle_1.png",
    "./assets/idle/terror-idle_2.png",
    "./assets/idle/terror-idle_3.png",
  ];
  let dragonTextures = [];
  movingDaragonImages.forEach((image) => {
    let texture = PIXI.Texture.from(image);
    dragonTextures.push(texture);
  });

  const terror = new PIXI.AnimatedSprite(dragonTextures);
  terror.x = 500;
  terror.y = 250;
  terror.vx = 0;
  terror.vy = 0;
  terror.anchor.set(0.5);
  terror.scale.x = 0.5;
  terror.scale.y = 0.5;
  terror.animationSpeed = 0.15;
  terror.play();
  return terror;
};
