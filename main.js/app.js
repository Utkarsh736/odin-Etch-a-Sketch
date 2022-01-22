const container = document.getElementById('container');

function gridSetup(){
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for(let i=1; i<=16; i++ ){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('id', i);
        gridSquare.textContent = i;
        grid.appendChild(gridSquare);
    };

    container.appendChild(grid);
};

gridSetup()

const Squares = document.querySelectorAll('.gridSquare');

Squares.forEach((selectSquare)=>{
    selectSquare.addEventListener('mouseover', ()=>{
        console.log(selectSquare.id);
        addClass(selectSquare);
    });
});

function addClass(e){
    e.classList.add('selected');
}