document.getElementById("login").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senha").value;

    const usuarioValido = "admin";
    const senhaValida = "123";
    const erro = document.getElementById("erro");
    erro.innerText = "";

    if (usuario === usuarioValido && senha === senhaValida) {
        localStorage.setItem("logado", "true");
        window.location.href = "home.html";
    } else {
        erro.innerText = "Usuário ou senha inválidos";
    }
})