const grid = document.getElementById('grid');
const color_btn = document.getElementById('color');
const eraser_btn = document.getElementById('eraser');
const rainbow_btn = document.getElementById('rainbow');
const clear_btn = document.getElementById('clear');
const size_slider = document.getElementById('size');
let slider_range = document.getElementById('sliderRange');

const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let color = DEFAULT_COLOR;
let mode = DEFAULT_MODE;
let size = DEFAULT_SIZE;


function gridSetup(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i=1; i<=size*size; i++ ){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('id', i);
        // gridSquare.textContent = i;
        grid.appendChild(gridSquare);
    };
    main();
    console.log(size);
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
            selectSquare.style.backgroundColor = `#${rgb()}`;
            
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

function rgb(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function gridClear(){
    grid.innerHTML = "";
}

function gridReload(){
    gridClear();
    gridSetup(size);
}

clear_btn.addEventListener('click', ()=>{
    gridReload();
    // main();
    console.log(grid);
})

// slider_range.addEventListener('input', ()=>{
//     // console.log(slider_range.value);
//     size = slider_range.value;
//     gridSetup(size);
// });

window.onload= function(){
    gridSetup(DEFAULT_SIZE);
    // main();
    buttons();
};

