//nome dos amigos participantes
let nomeDosAmigos = [];

//adicionando amigos
function adicionarAmigo() {
    let inputNome = document.getElementById('amigo');
    let nomeAmigo = inputNome.value.trim();

    if (nomeAmigo === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    nomeDosAmigos.push(nomeAmigo);
    inputNome.value = ""; 
    console.log(nomeDosAmigos); 

    atualizarLista(); 
}
//atualizando lista de amigos
function atualizarLista() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = ""; 
    
    for (let i = 0; i < nomeDosAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = nomeDosAmigos[i];
        listaDeAmigos.appendChild(item);
    }
}
//sorteando amigos 
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (nomeDosAmigos.length === 0) {
        resultado.innerHTML = 'Poxa, lista vazia! Insira alguns nomes para sortear!';
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * nomeDosAmigos.length);
    let amigoSorteado = nomeDosAmigos[nomeSorteado];

    resultado.innerHTML = `Uhuuul! O amigo secreto sorteado é...${amigoSorteado}!!!`;
}
