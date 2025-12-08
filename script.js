// Recurso em JavaScript: botão que mostra uma mensagem de contato

document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.getElementById("btn-contato");

    if (botaoContato) {
        botaoContato.addEventListener("click", function () {
            alert("Você pode falar comigo pelo e-mail: seu-email@exemplo.com");
        });
    }
});
