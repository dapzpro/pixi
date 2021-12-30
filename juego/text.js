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
