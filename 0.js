/**
 * sin曲线
 * y = A * Math.sin(B * x + C) + D
 * A ： 振幅
 * B ： 周期
 * X ： x偏移
 * Y ： y偏移
 */


const w = 600;  // 画布宽
const h = 600;  // 画布高
const line = {
  color: '#f80',
  width: 2,
  A: 50,
  B: 1 / 50,
  X: 3,
  Y: h / 2
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const { A, B, X, Y } = line;
canvas.width = w;
canvas.height = h;

ctx.moveTo(0, h / 2);
ctx.beginPath();
ctx.strokeStyle = line.color;
ctx.lineWidth = line.width;

let x = 0, y = 0;
while (x <= w)
{
  y = A * Math.sin(B * x + X) + Y;
  ctx.lineTo(x, y);
  x++;
}

ctx.stroke();
ctx.closePath();
