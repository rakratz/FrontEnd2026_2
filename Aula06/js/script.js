// Busca o formulário, os campos e os espaços para as mensagens.
const formulario = document.getElementById("form-login");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("password");
const erroEmail = document.getElementById("error-email");
const erroSenha = document.getElementById("error-password");

formulario.addEventListener("submit", function (evento) {
    // Impede o envio padrão do formulário.
    evento.preventDefault();

    // Apaga as mensagens da tentativa anterior.
    erroEmail.textContent = "";
    erroSenha.textContent = "";

    // Verifica se falta o @ no e-mail.
    const email = campoEmail.value;
    const emailInvalido = !email.includes("@");

    if (emailInvalido) {
        erroEmail.textContent = "O e-mail precisa ter um @.";
    }

    // Desafio: aceite apenas letras e números nas três partes do formato
    // usuario@dominio.extensao. Exija pelo menos dois caracteres em cada parte.

    // Verifica se a senha tem menos de 8 caracteres.
    const senhaInvalida = campoSenha.value.length < 8;

    if (senhaInvalida) {
        erroSenha.textContent = "A senha precisa ter pelo menos 8 caracteres.";
    }

    // Desafio criar as outras validações de senha
});
