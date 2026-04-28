function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    document.getElementById('message').innerText = "Tentativa de login com email: " + email;
    if(email === "isabelletoricelli68@gmail.com" && password === "12345678"){
        alert("Login bem-sucedido!");
    } else {
        alert("Email ou senha incorretos.");
    }


}
function cadastrar(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(nome && email && password){
        alert("Cadastro bem-sucedido!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }

}

function buscar(){
    const query = document.getElementById('searchInput').value;
    if(query){
        alert("Busca realizada para: " + query);
    } else {
        alert("Por favor, insira um termo de busca.");
    }
    document.getElementById('message').innerText = "Resultado da busca para: " + query;
}
