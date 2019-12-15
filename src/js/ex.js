const canvas = document.getElementById('drawOnMe');

const ctx = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

ctx.fillStyle = 'rgb(50, 125, 24)';

const draw = (state) => {
  ctx.clearRect(0, 0, width, height);
  ctx.fillRect(0, 0, state, height);
};


export default draw;
