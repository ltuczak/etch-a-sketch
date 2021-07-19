const container = document.createElement('div');
container.setAttribute('id','container');

let cells = [];
let rows = [];

document.body.appendChild(container);

let gridSize = prompt('Enter number of cells: ');

let sideLength = Math.sqrt(gridSize);

console.log(gridSize, sideLength);

function addColor() {
    this.setAttribute('class', 'cell color');
};

function removeColor() {
    this.classList.remove('color');
};

function makeGrid(length) {
    for (let i = 0; i < length; i++) {
        cells[i] = document.createElement('div');
        cells[i].setAttribute('id',`${i+1}`);
        cells[i].setAttribute('class','cell')
        container.appendChild(cells[i]);
    }

    cells.forEach(cell => cell.addEventListener('mouseover',addColor));

    return
}

makeGrid(sideLength);

const button = document.createElement('button');
button.setAttribute('id', 'btn');
document.body.appendChild(button);
button.textContent = 'Clear Grid';


function reset() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].remove();
    };
    
    gridSize = prompt('Enter grid size length:')
    
    sideLength = Math.sqrt(gridSize);

    if (gridSize > 100) {
        return alert('Error: max grid size exceeded');
    } else {
        makeGrid(Math.sqrt(gridSize));
    }
};

button.addEventListener('click', reset);
