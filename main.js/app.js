const grid = document.getElementById('grid');
const color = document.getElementById('color');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const size = document.getElementById('size');


let default_color = 'black';
let default_mode = 'color';
let default_size = 16;


function gridSetup(){
    
    for(let i=1; i<=4*4; i++ ){
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
            sketch(default_mode, selectSquare);
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
    color.addEventListener('click', ()=>{
        console.log('color');
        default_mode = 'color';
    });
    
    rainbow.addEventListener('click', ()=>{
        console.log('rainbow');
        default_mode = 'rainbow';
    });
    
    eraser.addEventListener('click', ()=>{
        console.log('eraser');
        default_mode = 'eraser';
    });
    
    clear.addEventListener('click', ()=>{
        console.log('clear');
    });
};




window.onload= function(){
    gridSetup();
    main();
    buttons();
};

