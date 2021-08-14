let library = ['monitor', 'caderno', 'espada', 'poltrona', 'videogame', 'televisão', 'roupeiro', 'sangue', 'caneta', 'internet', 'programar', 'whisky', 'faculdade', 'lógica', 'controle', 'jaqueta', 'lençol', 'coberta', 'almofada', 'biscoito', 'sushi', 'churrasco', 'barbecue', 'front-end', 'mobile', 'mousepad', 'garrafa', 'canivete', 'perfume'];
let amount = library.length - 1;
let pos = Math.round(Math.random() * amount);
let word = library[pos];
let length = word.length;
let boxLetters = [];
let hits;
let errorsMax = 7;
let errors = 0;
let pictures = [];
let gotIt = false;
let playing = false;
let player;


function defineLetters(l) {
    let obj;
    for (let i = 0; i < 9; i++) {
        obj = document.getElementById("letter" + i).value = "";
        obj = document.getElementById("letter" + i).style.display = "none";
    }
    for (let i = 0; i < l; i++) {
        obj = document.getElementById("letter" + i).style.display = "inline-block";
    }
}

function play() {
    player.focus();
    if (player.value === "") {
        document.querySelector(".div-msg").innerHTML = "DIGITE UMA LETRA!";
        document.querySelector(".div-msg").style.color = 'orange';
        document.querySelector(".div-msg").style.marginTop = '10px';
    } else {
        if (playing) {
            let obj;
            let letterTmp;
            let letter;
            let search;
            letter = player.value.toLowerCase();
            player.value = "";
            gotIt = false;
            search = word.match(letter);
            while (search != null) {
                letterTmp = word.search(letter);
                obj = document.getElementById("letter" + letterTmp).value = letter;
                word = word.replace(letter, '0');
                hits++;
                search = word.match(letter);
                gotIt = true;
            }
            if (!gotIt) {
                document.querySelector(".div-typed-letters").innerHTML += letter.toUpperCase() + " ";
                errors++;
                if (errors < 7) {
                    pictures[errors].style.display = "block";
                } else {
                    document.getElementById("head").src = "head2.png";
                    document.querySelector(".div-msg").innerHTML = "PERDEU!";
                    document.querySelector(".div-msg").style.color = 'red';
                    document.querySelector(".div-msg").style.marginTop = '10px';
                    playing = false;
                }
            }
            if (hits === length) {
                document.querySelector(".div-msg").innerHTML = "GANHOU!";
                document.querySelector(".div-msg").style.color = 'blue';
                document.querySelector(".div-msg").style.marginTop = '10px';
                playing = false;
            }
        }
    }
}

function start() {
    playing = true;
    player = document.getElementById("letterJ");
    player.value = "";
    player.focus();
    hits = 0;
    errors = 0;
    gotIt = false;
    document.querySelector(".div-typed-letters").innerHTML = "Letras Digitadas: ";
    pos = Math.round(Math.random() * amount);
    word = library[pos];
    length = word.length;
    defineLetters(length);
    document.querySelector(".div-msg").innerHTML = "";
    pictures[1] = document.getElementById("head");
    pictures[2] = document.getElementById("body");
    pictures[3] = document.getElementById("left-arm");
    pictures[4] = document.getElementById("right-arm");
    pictures[5] = document.getElementById("left-leg");
    pictures[6] = document.getElementById("right-leg");
    document.getElementById("head").src = "head1.png";
    for (let i = 1; i < 7; i++) {
        pictures[i].style.display = "none";
    }
}


window.addEventListener("load", start);