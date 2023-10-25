//<!-- JS 3 - Exercise 2  -->
var canvas = document.getElementById('signature');
var clearButton = document.getElementById('signatureClear')
var cont = canvas.getContext('2d');
var drawing = false;

const width = canvas.parentElement.clientWidth;
const height = canvas.parentElement.clientHeight;
canvas.width = width
canvas.height = height
cont.fillStyle = 'rgb(255,255,255)';
cont.fillRect(0, 0, width, height);
cont.fillStyle = 'rgb(0,0,0)';
cont.fillRect(10, height - 40, width - 20, 1);

clearButton.addEventListener('click', () => {
    cont.fillStyle = 'rgb(255,255,255)';
    cont.fillRect(0, 0, width, height);
    cont.fillStyle = 'rgb(0,0,0)';
    cont.fillRect(10, height - 40, width - 20, 1);
});

function drawingTrue(event) {
    drawing = true;
    var { mouseX, mouseY } = getMouseLoc(event);
    cont.beginPath();
    cont.moveTo(mouseX, mouseY);
}

function draw(event) {
    if (!drawing) return;
    var { mouseX, mouseY } = getMouseLoc(event);
    cont.lineTo(mouseX, mouseY);
    cont.stroke();
}

function drawingFalse() {
    drawing = false;
}

function getMouseLoc(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;
    return { mouseX, mouseY };
}
canvas.addEventListener('mousedown', drawingTrue);
canvas.addEventListener('mouseup', drawingFalse);
canvas.addEventListener('mouseleave', drawingFalse);
canvas.addEventListener('mousemove', draw);