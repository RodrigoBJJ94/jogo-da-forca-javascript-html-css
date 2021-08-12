
var biblioteca = ['monitor', 'caderno', 'espada', 'poltrona', 'videogame', 'televisão', 'roupeiro', 'javascript', 'sangue', 'caneta', 'internet', 'programação', 'whisky', 'faculdade', 'lógica', 'controle', 'jaqueta', 'lençol', 'coberta', 'almofada', 'biscoito', 'sushi', 'churrasco', 'barbecue', 'front-end', 'mobile', 'mousepad', 'garrafa', 'canivete', 'perfume'];
var qtde = biblioteca.length - 1;
var pos = Math.round(Math.random() * qtde);
var palavra = biblioteca[pos];
var tam = palavra.length;
var cxLetras = [];
var acertos;
var errosMax = 7;
var erros = 0;
var desenhos = [];
var acertou = false;
var jogando = false;
var jog;

function defineLetras(l) {
    var obj;
    for (var i = 0; i < 12; i++) {
        obj = document.getElementById("letra" + i).value = "";
        obj = document.getElementById("letra" + i).style.display = "none";
    }
    for (var i = 0; i < l; i++) {
        obj = document.getElementById("letra" + i).style.display = "inline-block";
    }
}

function jogar() {
    jog.focus();
    if (jog.value == "") {
        alert("Digite uma letra");
    } else {
        if (jogando) {
            var obj;
            var letraTmp;
            var letra;
            var pesq;
            letra = jog.value;
            jog.value = "";
            acertou = false;
            pesq = palavra.match(letra);
            while (pesq != null) {
                letraTmp = palavra.search(letra);
                obj = document.getElementById("letra" + letraTmp).value = letra;
                palavra = palavra.replace(letra, '0');
                acertos++;
                pesq = palavra.match(letra);
                acertou = true;
            }
            if (!acertou) {
                document.getElementById("dvletrasdigitadas").innerHTML += letra.toUpperCase() + " ";
                erros++;
                if (erros < 7) {
                    desenhos[erros].style.display = "block";
                } else {
                    document.getElementById("head").src = "head2.png";
                    document.getElementById("dvmsg").innerHTML = "PERDEU";
                    jogando = false;
                }
            }
            if (acertos == tam) {
                document.getElementById("dvmsg").innerHTML = "GANHOU";
                jogando = false;
            }
        }
    }
}

function inicia() {
    jogando = true;
    jog = document.getElementById("letraJ");
    jog.value = "";
    jog.focus();
    acertos = 0;
    erros = 0;
    acertou = false;
    document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";
    pos = Math.round(Math.random() * qtde);
    palavra = biblioteca[pos];
    tam = palavra.length;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML = "";
    desenhos[1] = document.getElementById("head");
    desenhos[2] = document.getElementById("body");
    desenhos[3] = document.getElementById("left-arm");
    desenhos[4] = document.getElementById("right-arm");
    desenhos[5] = document.getElementById("left-leg");
    desenhos[6] = document.getElementById("right-leg");
    document.getElementById("head").src = "head1.png";
    for (var i = 1; i < 7; i++) {
        desenhos[i].style.display = "none";
    }
}

window.addEventListener("load", inicia);