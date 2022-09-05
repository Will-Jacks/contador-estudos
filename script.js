let valorDosDias = document.querySelector('.quantidade-de-dias');

//Carregando automaticamente os dias estudados
valorDosDias.value = localStorage.info;


//Salva localmente os dias estudados
function salvar(){
    localStorage.info = valorDosDias.value;
}

/*function carregar(){
    document.querySelector(".quantidade-de-dias").value = localStorage.info;
}*/


//Transforma o valor em number e adiciona os dias de acordo com os botões
function adicionaValor(valor) {
    let valorInput = valorDosDias.value;
    let transformaString = parseInt(valorInput);
    let somaTudo = transformaString + valor;
    valorDosDias.value = somaTudo;
}