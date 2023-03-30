const gridContainer = document.getElementById('container');

const easyBtn = document.getElementById("btnEasy");
const mediumBtn = document.getElementById("btnMedium");
const hardBtn = document.getElementById("btnHard");

easyBtn.addEventListener('click', 
    function() {
        gridContainer.innerHTML = "";

        gridDifficulty(100, "squareEasy")

        squareClickAdd('[class^="square"]', 'active')
        
    }
);

mediumBtn.addEventListener('click', 
    function() {
        gridContainer.innerHTML = "";

        gridDifficulty(81, "squareMedium")    

        squareClickAdd('[class^="square"]', 'active')
        
    }
    
);

hardBtn.addEventListener('click', 
    function() {
        gridContainer.innerHTML = "";

        gridDifficulty(49, "squareHard")

        squareClickAdd('[class^="square"]', 'active')
    }
);
function squareGenerator(x, y) {
    let gridSquare = document.createElement(x);
    gridSquare.classList.add(y);
    return gridSquare
}

function gridDifficulty(x, y) {
    for (let i = 0; i < x; i++) {
        let newElem = squareGenerator("div", y);
        gridContainer.appendChild(newElem);
    }
}

function squareClickAdd(x, y) {
    let squareClick = document.querySelectorAll(x);
        console.log(squareClick);

        for (let i = 0; i < squareClick.length; i++) {
            squareClick[i].addEventListener ('click', 
                function() {
                    squareClick[i].classList.add(y);
                    squareClick[i].innerText = i + 1;
                }
            );
        }
}