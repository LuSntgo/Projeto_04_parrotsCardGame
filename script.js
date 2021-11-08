const cartas = document.querySelectorAll(".card");

let flipCard = false;
let bloqueio = false;
let primeiraCarta;
let segundaCarta;

function virarCarta() {
  if (bloqueio) return;
  if (this === primeiraCarta) return;

  this.classList.add("flip");

  if (!flipCard) {
    flipCard = true;
    primeiraCarta = this;

    return;
  }

  segundaCarta = this;
  deuMatch();
}

function deuMatch() {
  let match = primeiraCarta.dataset.id === segundaCarta.dataset.id;

  match ? desativarCarta() : desvirarCarta();
}

function desativarCarta() {
    primeiraCarta.removeEventListener("click", virarCarta);
    segundaCarta.removeEventListener("click", virarCarta);

    resetar();
}

function desvirarCarta() {
  bloqueio = true;

  setTimeout(() => {
    primeiraCarta.classList.remove("flip");
    segundaCarta.classList.remove("flip");

    resetar();
  }, 1000);
}

function resetar() {
  [flipCard, bloqueio] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}
//função com IIFE pra ser chamada primeiro
(function embaralhar() {
    cartas.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 14);
    card.style.order = randomPos;
  });
})();

cartas.forEach((card) => card.addEventListener("click", virarCarta));
