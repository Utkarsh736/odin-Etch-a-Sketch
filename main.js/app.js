const container = document.getElementById('container');


// const grid = document.createElement('div');
// grid.classList.add('grid');

// for(var i=0; i<16; i++){
//     var gridBox = document.createElement('div');
//     gridBox.textContent = i;
//     grid[i].appendChild(gridBox);
// };


// container.appendChild(grid);

function gridSetup(){
    const grid = document.createElement('div');

    for(let i=0; i<16; i++ ){
        const gridBox = document.createElement('div');
        gridBox.textContent = i+1;
        grid.appendChild(gridBox);
    };

    container.appendChild(grid);
};

gridSetup()