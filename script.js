document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.getElementById("btn-contato");

    if (botaoContato) {
        botaoContato.addEventListener("click", function () {
            alert("Você pode falar comigo pelo e-mail: vclf@cesar.school");
        });
    }
});

