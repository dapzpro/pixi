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
