const formulario = document.getElementById('form-login');
const mensagem = document.getElementById('mensagem-login');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    mensagem.classList.remove('sucesso', 'erro');

    if (!email || !senha) {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.classList.add('erro');
        return;
    }

    if (email === "aluno@teste.com" && senha === "123456") {
        mensagem.textContent = 'Login realizado com sucesso!';
        mensagem.classList.add('sucesso');
    } else {
        mensagem.textContent = 'Email ou senha incorretos.';
        mensagem.classList.add('erro');
    }
});