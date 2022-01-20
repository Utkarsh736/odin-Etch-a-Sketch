const container = document.getElementById('container');

function gridSetup(){
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for(let i=1; i<=16; i++ ){
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridBox.setAttribute('id', i);
        gridBox.innerHTML = 'Grids';
        gridBox.textContent = i;
        grid.appendChild(gridBox);
    };

    container.appendChild(grid);
};

gridSetup()