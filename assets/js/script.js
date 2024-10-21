function handleSearch(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const query = document.querySelector('.search-input').value; // Obtém o valor do campo de pesquisa
    console.log("Pesquisando:", query); // Exibe no console
    return false; // Retorna false para garantir que o formulário não seja enviado
}


let rotation = 0; // Variável para armazenar o ângulo atual de rotação

document.getElementById('nav-icon').addEventListener('click', function () {
    // Alterna entre 20 graus e 0 graus a cada clique
    if (rotation === 0) {
        rotation = 45;
    } else {
        rotation = 0;
    }

    this.style.transform = `rotate(${rotation}deg)`; // Aplica a rotação
});