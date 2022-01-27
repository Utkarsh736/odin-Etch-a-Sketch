const grid = document.getElementById('grid');
const color_btn = document.getElementById('color');
const eraser_btn = document.getElementById('eraser');
const rainbow_btn = document.getElementById('rainbow');
const clear_btn = document.getElementById('clear');
const size_btn = document.getElementById('size');

const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let mode = DEFAULT_MODE;
let size = DEFAULT_SIZE;


function gridSetup(){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i=1; i<=size*size; i++ ){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('id', i);
        gridSquare.textContent = i;
        grid.appendChild(gridSquare);
    };

};

function main(){
    const Squares = document.querySelectorAll('.gridSquare');

    Squares.forEach((selectSquare)=>{
        selectSquare.addEventListener('mouseover', ()=>{
            sketch(mode, selectSquare);
        });
    });
};

function sketch(mode, selectSquare){

    switch(mode){
        case 'color':
            selectSquare.style.backgroundColor = "black";
            break;

        case 'rainbow':
            selectSquare.style.backgroundColor = "blue";
            break;

        case 'eraser':
            selectSquare.style.backgroundColor = "white";
            break;
    };
};


function buttons(){
    color_btn.addEventListener('click', ()=>{
        console.log('color');
        mode = 'color';
    });
    
    rainbow_btn.addEventListener('click', ()=>{
        console.log('rainbow');
        mode = 'rainbow';
    });
    
    eraser_btn.addEventListener('click', ()=>{
        console.log('eraser');
        mode = 'eraser';
    });
    
    clear_btn.addEventListener('click', ()=>{
        console.log('clear');
    });
};




window.onload= function(){
    gridSetup();
    main();
    buttons();
};

