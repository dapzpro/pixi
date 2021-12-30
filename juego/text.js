const lifeText = (width) => {
  const style = new PIXI.TextStyle({
    fontFamily: "Moon Dance",
    fontSize: 40,
    fill: ["#ffffff"],
    strokeThickness: 0,
    lineJoin: "round",
  });

  const text = new PIXI.Text("Vidas: 3 ", style);
  text.x = width / 2;
  text.y = 0;
  return text;
};
///lora
const deadText = (height, width) => {
  const style = new PIXI.TextStyle({
    fontFamily: "Lora",
    fontSize: 50,
    fill: ["#750b0e"],
    stroke: "#000000",
    strokeThickness: 2,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 3,
    dropShadowAngle: Math.PI / 3,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: "round",
  });

  const text = new PIXI.Text("YOU ARE DEAD", style);
  text.x = width / 2;
  text.y = height / 2;
  text.anchor.set(0.5);
  return text;
};

const timerText = () => {
  const style = new PIXI.TextStyle({
    fontFamily: "Moon Dance",
    fontSize: 40,
    fill: ["#ffffff"],
    lineJoin: "round",
  });
  const contador = new PIXI.Text("0", style);
  contador.x = 20;
  contador.y = 10;
  return contador;
};
