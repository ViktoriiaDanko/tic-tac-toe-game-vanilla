window.onload = function() {
    const NUMBER_OF_TITLES = 9;
    for (let i = 0; i < NUMBER_OF_TITLES; i++) {
        document.querySelector('.game').innerHTML+='<div class="block"></div>';
    }

    let number = 0;
    
    document.querySelector('.game').onclick = function(event) {
        if (event.target.className === 'block') {
            number = number === 'X' ? '0' : 'X';
            event.target.innerHTML = number;
        }
        gameResult();
    }

    function gameResult() {
        let allItems = document.getElementsByClassName('block');
        //console.log(allItems);
        if (allItems[0].innerHTML === 'X' && allItems[1].innerHTML === 'X' && allItems[2].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[3].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[5].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[6].innerHTML === 'X' && allItems[7].innerHTML === 'X' && allItems[8].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[0].innerHTML === 'X' && allItems[3].innerHTML === 'X' && allItems[6].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[1].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[7].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[2].innerHTML === 'X' && allItems[5].innerHTML === 'X' && allItems[8].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[0].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[8].innerHTML === 'X') alert("Победили крестики!");
        if (allItems[2].innerHTML === 'X' && allItems[4].innerHTML === 'X' && allItems[6].innerHTML === 'X') alert("Победили крестики!");

        if (allItems[0].innerHTML === '0' && allItems[1].innerHTML === '0' && allItems[2].innerHTML === '0') alert("Победили нолики!");
        if (allItems[3].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[5].innerHTML === '0') alert("Победили нолики!");
        if (allItems[6].innerHTML === '0' && allItems[7].innerHTML === '0' && allItems[8].innerHTML === '0') alert("Победили нолики!");
        if (allItems[0].innerHTML === '0' && allItems[3].innerHTML === '0' && allItems[6].innerHTML === '0') alert("Победили нолики!");
        if (allItems[1].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[7].innerHTML === '0') alert("Победили нолики!");
        if (allItems[2].innerHTML === '0' && allItems[5].innerHTML === '0' && allItems[8].innerHTML === '0') alert("Победили нолики!");
        if (allItems[0].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[8].innerHTML === '0') alert("Победили нолики!");
        if (allItems[2].innerHTML === '0' && allItems[4].innerHTML === '0' && allItems[6].innerHTML === '0') alert("Победили нолики!"); 
    }
}
