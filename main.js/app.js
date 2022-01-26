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
    
    for(let i=1; i<=16*16; i++ ){
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
            sketch(default_mode);

        });
    });
};

function sketch(mode){

    switch(mode){
        case 'color':
            console.log('c');
            break;

        case 'rainbow':
            console.log('r');
            break;

        case 'eraser':
            console.log('e');
            break;
    };

    console.log(default_color);
    console.log(default_mode);
    console.log(default_size);
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

