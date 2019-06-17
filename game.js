window.onload = function() {
    const NUMBER_OF_TILES = 9;
    for (let i = 0; i < NUMBER_OF_TILES; i++) {
        document.querySelector('.game').innerHTML+='<div class="block"></div>';
    }

    let activePlayerIcon = '0';
    
    document.querySelector('.game').onclick = function(event) {
        if (event.target.className === 'block') {
            activePlayerIcon = activePlayerIcon === 'X' ? '0' : 'X';
            event.target.innerHTML = activePlayerIcon;
        }

        const gameResultNode = document.querySelector('.game-result');

        const gameResult = getGameStatus();
        if (gameResult.isGameEnded) {
            gameResultNode.innerHTML = gameResult.winner === 'X' ? 'Победили крестики' : 'Победили нолики';
            gameResultNode.classList.remove('hidden-item');
            gameResultNode.classList.add('.visible-item');
        }
    }

    function getGameStatus() {
        const allItems = document.getElementsByClassName('block');
        if (isPlayerWin(allItems, 'X')) {
            return {isGameEnded: true, winner: 'X'};
        } else if (isPlayerWin(allItems, '0')) {
            return {isGameEnded: true, winner: '0'};
        }
    }

    function isPlayerWin(allItems, activePlayerIcon) {
        if (allItems[0].innerHTML === activePlayerIcon && allItems[1].innerHTML === activePlayerIcon && allItems[2].innerHTML === activePlayerIcon) return true;
        if (allItems[3].innerHTML === activePlayerIcon && allItems[4].innerHTML === activePlayerIcon && allItems[5].innerHTML === activePlayerIcon) return true;
        if (allItems[6].innerHTML === activePlayerIcon && allItems[7].innerHTML === activePlayerIcon && allItems[8].innerHTML === activePlayerIcon) return true;
        if (allItems[0].innerHTML === activePlayerIcon && allItems[3].innerHTML === activePlayerIcon && allItems[6].innerHTML === activePlayerIcon) return true;
        if (allItems[1].innerHTML === activePlayerIcon && allItems[4].innerHTML === activePlayerIcon && allItems[7].innerHTML === activePlayerIcon) return true;
        if (allItems[2].innerHTML === activePlayerIcon && allItems[5].innerHTML === activePlayerIcon && allItems[8].innerHTML === activePlayerIcon) return true;
        if (allItems[0].innerHTML === activePlayerIcon && allItems[4].innerHTML === activePlayerIcon && allItems[8].innerHTML === activePlayerIcon) return true;
        if (allItems[2].innerHTML === activePlayerIcon && allItems[4].innerHTML === activePlayerIcon && allItems[6].innerHTML === activePlayerIcon) return true;
        return false;
    }    
}
