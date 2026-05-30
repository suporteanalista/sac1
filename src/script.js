document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  if(user === "admin" && password === "1234") {
    alert("Login realizado com sucesso!");
  } else {
    alert("Usuário ou senha inválidos.");
  }
});
