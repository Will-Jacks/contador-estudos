//Carregando automaticamente os dias estudados
document.querySelector(".quantidade-de-dias").value = localStorage.info;

//Salva localmente os dias estudados
function salvar(){
    localStorage.info = document.querySelector(".quantidade-de-dias").value;
}

/*function carregar(){
    document.querySelector(".quantidade-de-dias").value = localStorage.info;
}*/


//Transforma o valor em number e adiciona os dias de acordo com os botões
function adicionaValor(valor) {
    let valorInput = document.querySelector('.quantidade-de-dias').value;
    let transformaString = parseInt(valorInput);
    let somaTudo = transformaString + valor;
    document.querySelector('.quantidade-de-dias').value = somaTudo;
}