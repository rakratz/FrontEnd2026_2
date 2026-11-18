const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem-login");

    // Limpar a classe de erro antes de validar novamente
     mensagem.classList.remove("sucesso", "erro");

    if (usuario === "aluno" || senha === "1234") {
        mensagem.classList.add("sucesso");
        mensagem.textContent = "Login bem-sucedido!";
    } else {
        mensagem.classList.add("erro");
        mensagem.textContent = "Usuário ou senha incorretos.";
    }

});