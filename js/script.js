let arr_bomber = [];
  let nbr_bomber = 16;
  let start_play = 1;
  let difficulty = 100;
  let y = 0;
  let points = 0;

  // Livelli di Difficoltà
  do {
    difficulty = prompt('Difficoltà:  1  |  2  |  3 ');
} while ((difficulty != '1') && (difficulty != '2') && (difficulty != '3'))

switch (difficulty) {
    
    case '1':
        difficulty = 100;
    break;

    case '2':
        difficulty = 80;
    break;
        
    case '3':
        difficulty = 50;
    break;
}

while (y < nbr_bomber) {
    
    pos_bomber = getRndInteger(start_play, difficulty);

    let check_pos_bomb = contains(arr_bomber, pos_bomber)

    if (check_pos_bomb == false) {
    arr_bomber.push(pos_bomber);
    y++;
    }
}

console.log(arr_bomber);

creaCampo(difficulty);
document.getElementById('campo').addEventListener('click',
    function(e) {

        let nbr_play = difficulty - nbr_bomber;
        let nbr_player = parseInt(e.target.dataset.cella);
        let element = document.querySelectorAll('[data-cella="' + nbr_player + '"]');
        let check_bomb_player = contains(arr_bomber, nbr_player);
        
        do {

            if (points == nbr_play){
                alert('Hai evitato tutte le bombe! Hai vinto!');
                document.getElementById("numero_giocate").innerHTML = "Hai totalizzato: " + points + " punti";
                document.getElementById("array_bombe").innerHTML = "Le bombe erano in posizione " + arr_bomber;
                return;
            }

            if (check_bomb_player == true){
                element[0].classList.add('red');
                
                document.getElementById("numero_giocate").innerHTML = "Hai totalizzato: " + points + " punti";
                document.getElementById("array_bombe").innerHTML = "Le bombe erano nelle celle: " + arr_bomber;
                return;
            }    
            
            if(element[0].classList.contains('green')) {
                return;
            }

            if (check_bomb_player == false) {
                points += 1;
                element[0].classList.add('green');
                return;
            }
        } while(points <= nbr_play)
    }
    
)

function creaCampo(celle){

    for(let i = 1; i <= celle; i++){
        let cella = `
            <div data-cella="${i}" id="cella">${i}</div>
        `;
        let templateCella = document.createElement('DIV');
        templateCella.classList.add('square');
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function contains(a, obj) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}



