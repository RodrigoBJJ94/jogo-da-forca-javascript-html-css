
var library = ['monitor', 'caderno', 'espada', 'poltrona', 'videogame', 'televisão', 'roupeiro', 'javascript', 'sangue', 'caneta', 'internet', 'programação', 'whisky', 'faculdade', 'lógica', 'controle', 'jaqueta', 'lençol', 'coberta', 'almofada', 'biscoito', 'sushi', 'churrasco', 'barbecue', 'front-end', 'mobile', 'mousepad', 'garrafa', 'canivete', 'perfume'];
var amount = library.length - 1;
var pos = Math.round(Math.random() * amount);
var word = library[pos];
var length = word.length;
var boxLetters = [];
var hits;
var errorsMax = 7;
var errors = 0;
var pictures = [];
var gotIt = false;
var playing = false;
var player;

function defineLetters(l) {
    var obj;
    for (var i = 0; i < 12; i++) {
        obj = document.getElementById("letter" + i).value = "";
        obj = document.getElementById("letter" + i).style.display = "none";
    }
    for (var i = 0; i < l; i++) {
        obj = document.getElementById("letter" + i).style.display = "inline-block";
    }
}

function play() {
    player.focus();
    if (player.value == "") {
        alert("Digite uma letra");
    } else {
        if (playing) {
            var obj;
            var letterTmp;
            var letter;
            var pesq;
            letter = player.value;
            player.value = "";
            gotIt = false;
            pesq = word.match(letter);
            while (pesq != null) {
                letterTmp = word.search(letter);
                obj = document.getElementById("letter" + letterTmp).value = letter;
                word = word.replace(letter, '0');
                hits++;
                pesq = word.match(letter);
                gotIt = true;
            }
            if (!gotIt) {
                document.getElementById("dvletrasdigitadas").innerHTML += letter.toUpperCase() + " ";
                errors++;
                if (errors < 7) {
                    pictures[errors].style.display = "block";
                } else {
                    document.getElementById("head").src = "head2.png";
                    document.getElementById("dvmsg").innerHTML = "PERDEU";
                    playing = false;
                }
            }
            if (hits == length) {
                document.getElementById("dvmsg").innerHTML = "GANHOU";
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
    document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";
    pos = Math.round(Math.random() * amount);
    word = library[pos];
    length = word.length;
    defineLetters(length);
    document.getElementById("dvmsg").innerHTML = "";
    pictures[1] = document.getElementById("head");
    pictures[2] = document.getElementById("body");
    pictures[3] = document.getElementById("left-arm");
    pictures[4] = document.getElementById("right-arm");
    pictures[5] = document.getElementById("left-leg");
    pictures[6] = document.getElementById("right-leg");
    document.getElementById("head").src = "head1.png";
    for (var i = 1; i < 7; i++) {
        pictures[i].style.display = "none";
    }
}

window.addEventListener("load", start);