//const recebe o array com todas as cartas
const cartas = document.querySelectorAll('.card');
// declaração de variaveis
let flipCarta = false;
let primeiraCarta;
let segundaCarta;
let bloqueio = false;


//função para flip
function viraCarta(){
    this.classList.toggle('flip');
    if (!flipCarta) {
        flipCarta = true;
         primeiraCarta = this;
       return
        }
        segundaCarta = this;
        flipCarta = false;
        deuMatch();
    }

function deuMatch(){
     if (primeiraCarta.dataset.identifier === segundaCarta.dataset.identifier) {
        desativeCarta();
        return;
    }
    desviraCarta();
}
 function desviraCarta(){
     setTimeout(() => {
         primeiraCarta.classList.remove('flip');
          segundaCarta.classList.remove('flip');
         }, 1000);
     }
 function desativeCarta() {
    primeiraCarta.removeEventListener('click', viraCarta)
    segundaCarta.removeEventListener('click', viraCarta)
 }

//para cada item do array CARTAS uma ação (callback) vai ser executada
//forEach recebe 3 parametros
//O primeiro (carta) é o item a ser inteirado
// toda vez que ela for chamada, cada item vai executar
cartas.forEach(carta => carta.addEventListener('click',viraCarta)); 