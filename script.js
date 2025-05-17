// Validação básica do formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envio real

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Exibe uma mensagem de envio simulado
    alert("Obrigado por entrar em contato, " + nome + "! Sua mensagem foi enviada.");
    
    // Limpa o formulário
    form.reset();
  });
});
