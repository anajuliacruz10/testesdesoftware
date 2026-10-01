// ==============================
// TESTE DO FORMULÁRIO
// ==============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    // Verifica se o nome está vazio
    if (nome === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: o nome é obrigatório!";
        return;
    }

    // Verifica se o e-mail está vazio
    if (email === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: o e-mail é obrigatório!";
        return;
    }

    // Verifica se o e-mail possui @
    if (!email.includes("@")) {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro: formato de e-mail incorreto!";
        return;
    }

    // Se estiver tudo correto
    mensagem.style.color = "green";
    mensagem.textContent = "✅ Formulário enviado com sucesso!";
});


// ==============================
// TESTE DE UNIDADE
// ==============================

function multiplicar(a, b) {
    return a * b;
}


// Testes automatizados
function testarMultiplicacao() {

    console.assert(
        multiplicar(2, 3) === 6,
        "Teste 1 falhou!"
    );

    console.assert(
        multiplicar(5, 4) === 20,
        "Teste 2 falhou!"
    );

    console.assert(
        multiplicar(10, 5) === 50,
        "Teste 3 falhou!"
    );

    console.log("✅ Todos os testes de multiplicação passaram!");
}


// Executa os testes
testarMultiplicacao();