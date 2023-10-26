//<!-- JS 3 - Exercise 2  -->
const canvas = document.getElementById('signature');
const clearButton = document.getElementById('signatureClear');
const cont = canvas.getContext('2d');
let drawing = false;

const width = canvas.parentElement.clientWidth;
const height = canvas.parentElement.clientHeight;
canvas.width = width;
canvas.height = height;
cont.fillStyle = 'rgb(255,255,255)';
cont.fillRect(0, 0, width, height);
cont.fillStyle = 'rgb(0,0,0)';
cont.fillRect(10, height - 40, width - 20, 1);

// JS 4 Exercise 2 Part 3 -->
clearButton.addEventListener('click', () => {
  cont.fillStyle = 'rgb(255,255,255)';
  cont.fillRect(0, 0, width, height);
  cont.fillStyle = 'rgb(0,0,0)';
  cont.fillRect(10, height - 40, width - 20, 1);
});

const drawingTrue = (event) => {
  drawing = true;
  const { mouseX, mouseY } = getMouseLoc(event);
  cont.beginPath();
  cont.moveTo(mouseX, mouseY);
};

const draw = (event) => {
  if (!drawing) return;
  const { mouseX, mouseY } = getMouseLoc(event);
  cont.lineTo(mouseX, mouseY);
  cont.stroke();
};

const drawingFalse = () => {
  drawing = false;
};

const getMouseLoc = (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  return { mouseX, mouseY };
};
//End here <---

canvas.addEventListener('mousedown', drawingTrue);
canvas.addEventListener('mouseup', drawingFalse);
canvas.addEventListener('mouseleave', drawingFalse);
canvas.addEventListener('mousemove', draw);
