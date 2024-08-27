var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var nivel = window.location.search;

var criarMosquitoTempo = 2000;

if (nivel === "?Normal") {
  criarMosquitoTempo = 1500;
} else if (nivel === "?Dificil") {
  criarMosquitoTempo = 1000;
} else if (nivel === "?CHUCKNORRIS") {
  criarMosquitoTempo = 750;
}

function ajustarTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log("Altura:" + altura, "Largura:" + largura);
}

ajustarTamanhoPalcoJogo();

var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosquito);
    alert("Você venceu!");
    window.location.href = "vitoria_do_jogo.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

var criarMosquito = setInterval(function () {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas >= 3) {
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }

  var posicaoY = Math.floor(Math.random() * altura) - 90;
  var posicaoX = Math.floor(Math.random() * largura) - 90;

  if (posicaoX < 0) {
    posicaoX = 0;
  }

  if (posicaoY < 0) {
    posicaoY = 0;
  }

  console.log(posicaoX, posicaoY);

  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = tamanhosMosquitoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);

  function tamanhosMosquitoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
      case 0:
        return "mosquito1";
      case 1:
        return "mosquito2";
      case 2:
        return "mosquito3";
    }
  }

  function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
      case 0:
        return "ladoA";
      case 1:
        return "ladoB";
    }
  }
}, criarMosquitoTempo);

