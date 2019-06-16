window.onload = function() {
    const NUMBER_OF_TILES = 9;
    for (let i = 0; i < NUMBER_OF_TILES; i++) {
        document.querySelector('.game').innerHTML+='<div class="block"></div>';
    }

    let activePlayerIcon = 0;
    
    document.querySelector('.game').onclick = function(event) {
        if (event.target.className === 'block') {
            activePlayerIcon = activePlayerIcon === 'X' ? '0' : 'X';
            event.target.innerHTML = activePlayerIcon;
        }
        getGameStatus();
    }

        function getGameStatus() {
            let allItems = document.getElementsByClassName('block');
            return {
                isGameEnded: true, 
                winner: 'X'
            };
            
            if (getGameStatus().winner === 'X' && isGameEnded) {
                alert('Игра закончена ' + 'победили крестики');
            } else {
                alert('Игра закончена ' + 'победили крестики');
            }
        }

        if (allItems[0].innerHTML === 'X' && allItems[1].innerHTML === 'X' && allItems[2].innerHTML === 'X');
        if (allItems[3].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[5].innerHTML === 'X');
        if (allItems[6].innerHTML === 'X' && allItems[7].innerHTML === 'X' && allItems[8].innerHTML === 'X');
        if (allItems[0].innerHTML === 'X' && allItems[3].innerHTML === 'X' && allItems[6].innerHTML === 'X');
        if (allItems[1].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[7].innerHTML === 'X');
        if (allItems[2].innerHTML === 'X' && allItems[5].innerHTML === 'X' && allItems[8].innerHTML === 'X');
        if (allItems[0].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[8].innerHTML === 'X');
        if (allItems[2].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[6].innerHTML === 'X');

        if (allItems[0].innerHTML === '0' && allItems[1].innerHTML === '0' && allItems[2].innerHTML === '0');
        if (allItems[3].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[5].innerHTML === '0');
        if (allItems[6].innerHTML === '0' && allItems[7].innerHTML === '0' && allItems[8].innerHTML === '0');
        if (allItems[0].innerHTML === '0' && allItems[3].innerHTML === '0' && allItems[6].innerHTML === '0');
        if (allItems[1].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[7].innerHTML === '0');
        if (allItems[2].innerHTML === '0' && allItems[5].innerHTML === '0' && allItems[8].innerHTML === '0');
        if (allItems[0].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[8].innerHTML === '0');
        if (allItems[2].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[6].innerHTML === '0');
}

