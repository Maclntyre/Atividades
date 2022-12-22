let tituloElementar = document.createElement("h1");
tituloElementar.innerText = "TrybeTrip - Agência de Viagens ";
document.body.appendChild(tituloElementar);

let mainEPai = document.createElement("main");
mainEPai.className = "main-content";
document.body.appendChild(mainEPai);

let salaoDeTango = document.createElement("section");
salaoDeTango.className = "center-content";
mainEPai.appendChild(salaoDeTango);

let textinho = document.createElement("p");
textinho.innerHTML = "Saudades do selo Vertigo";
salaoDeTango.appendChild(textinho);
console.log("abcd");

let esquerdista = document.createElement("section");
esquerdista.className = "left-content";
mainEPai.appendChild(esquerdista);

let musasDeDireita = document.createElement("section");
musasDeDireita.className = "right-content";
mainEPai.appendChild(musasDeDireita);

let fotoEstranha = document.createElement("img");
fotoEstranha.className = "small-image";
element.src = "https://picsum.photos/200";
esquerdista.appendChild(fotoEstranha);

let bolsaDeNumeros = document.createElement("ul");
esquerdista.appendChild(bolsaDeNumeros);
let pochete = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let numero in pochete) {
  let listaDeVezesQueApanheiParaFor = document.createElement("li");
  listaDeVezesQueApanheiParaFor.innerHTML = pochete[numero];
  listaDeVezesQueApanheiParaFor.appendChild(bolsaDeNumeros);
}

for (let i = 1; i <= 3; i += 1) {
  let ElementoX = document.createElement("h3");
  ElementoX.innerHTML = "Lindinha, Florzinha e Docinho" + index;
  mainEPai.appendChild(ElementoX);
}

let titulo = document.querySelector("h1");
title.className = titulo;

let ElementoX = document.getElementsByTagName("h3");
for (let i = 0; i < 3; i += 1) {
  ElementoX[index].className = "descricao";
}
