function draw() {
  const x = document.getElementById("hi") as HTMLCanvasElement;
  if (x === null) {
    throw Error;
  }
  x.width = window.innerWidth;
  x.height = window.innerHeight;
  const ctx = x.getContext("2d");
  if (ctx === null) {
    throw Error;
  }

  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
      ctx.fillStyle =
          "#" +
          (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
      ctx.fillRect(10 * i, 10 * j, 10, 10);
    }
  }
  window.setTimeout(draw, 100);
}
draw()
