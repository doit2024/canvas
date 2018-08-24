/**
 * sin曲线
 * y = A * Math.sin(B * x + C) + D
 * A ： 振幅  变
 * B ： 周期
 * X ： x偏移
 * Y ： y偏移
 */
 
const w = 600;  // 画布宽
const h = 600;  // 画布高

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = w;
canvas.height = h;

const draw = (A, B, color, X) => {
  ctx.moveTo(0, h / 2);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;

  let x = 0, y = 0;
  while (x <= w)
  {
    y = (1 + Math.sin(2 * Math.PI * x / w - 0.5 * Math.PI)) * A * Math.sin(B * x + X) + h / 2;
    ctx.lineTo(x, y);
    x++;
  }

  ctx.stroke();
  ctx.closePath();
}

let X = 0
const paint = () => {
  requestAnimationFrame(paint);
  ctx.clearRect(0, 0, w, h);
  X = X - 0.01;
  for (let i = 0; i < 5; i++ ) {
    a = Math.random() * 20 + 10
    b = 1 / (Math.random() * 10 + 10)
    c = '#' + (~~(Math.random()* 0xffffff)).toString(16)
    draw(a, b, c, X)
  }
}

paint()