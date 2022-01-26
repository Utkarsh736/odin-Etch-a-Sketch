const grid = document.getElementById('grid');
const color = document.getElementById('color');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const size = document.getElementById('size');

// let DEFAULT_COLOR = #fff;
// let DEFAULT_MODE = color;
// let DEFAULT_SIZE = 16;

function gridSetup(){
    
    for(let i=1; i<=16*16; i++ ){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('id', i);
        gridSquare.textContent = i;
        grid.appendChild(gridSquare);
    };

};

const Squares = document.querySelectorAll('.gridSquare');
console.log(Squares);

Squares.forEach((selectSquare)=>{
    selectSquare.addEventListener('mouseover', ()=>{
        console.log(selectSquare.id);

    });
});


gridSetup()