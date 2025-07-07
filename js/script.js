// script.js

// Adiciona comportamento ao formulário de contato
// Quando o formulário for enviado, mostra um alerta e evita o envio padrão

const form = document.getElementById("form-contato");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede envio real

    const nome = document.getElementById("nome").value;
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada.`);

    // Opcional: limpar os campos
    form.reset();
  });
}
