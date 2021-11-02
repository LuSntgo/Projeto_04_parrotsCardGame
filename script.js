
//const recebe o array com todas as cartas
const cartas = document.querySelectorAll('.card');


//função para flip
function viraCarta(){
    this.classList.toggle('flip');
}
//para cada item do array CARTAS uma ação (callback) vai ser executada
//forEach recebe 3 parametros
//O primeiro (carta) é o item a ser inteirado
// toda vez que ela for chamada, cada item vai executar
cartas.forEach(carta => carta.addEventListener('click',viraCarta)); 