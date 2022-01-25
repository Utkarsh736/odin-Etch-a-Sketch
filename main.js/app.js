const grid = document.getElementById('grid');
const eraser = document.getElementById('eraser');

function gridSetup(){
    
    for(let i=1; i<=16*16; i++ ){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('id', i);
        gridSquare.textContent = i;
        grid.appendChild(gridSquare);
    };

};

gridSetup()

const Squares = document.querySelectorAll('.gridSquare');

Squares.forEach((selectSquare)=>{
    selectSquare.addEventListener('mouseover', ()=>{
        // console.log(selectSquare.id);
        addClass(selectSquare);
    });
});

function addClass(e){
    e.classList.add('selected');
}

eraser.addEventListener('click', ()=>{
    gridSetup();
})