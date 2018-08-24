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
const line = {
  color: '#000',
  width: 0.5,
  A: 20,
  B: 1 / 3,
  X: 3,
  Y: h / 2
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let { A, B, X, Y } = line;
canvas.width = w;
canvas.height = h;

ctx.moveTo(0, h / 2);
ctx.beginPath();
ctx.strokeStyle = line.color;
ctx.lineWidth = line.width;

let x = 0, y = 0;
while (x <= w)
{
  A = (1 + Math.sin(2 * Math.PI * x / w - 0.5 * Math.PI)) * line.A
  y = A * Math.sin(B * x + X) + Y;
  ctx.lineTo(x, y);
  x++;
}

ctx.stroke();
ctx.closePath();
