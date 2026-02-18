// LOGOUT
const botaoLogout = document.getElementById("logout");

if (botaoLogout) {
  botaoLogout.addEventListener("click", function () {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
  });
}
