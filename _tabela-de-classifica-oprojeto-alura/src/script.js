// AULA 5

var jake = {
  nome: "Jake",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var amy = {
  nome: "Amy",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var boyle = {
  nome: "Boyle",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var terry = {
  nome: "Terry",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var rosa = {
  nome: "Rosa",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var holt = {
  nome: "Holt",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var scully = {
  nome: "Scully",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var hitchcock = {
  nome: "Hitchcock",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
    <tr>
        <td>${jake.nome}</td>
        <td>${jake.vitoria}</td>
        <td>${jake.empate}</td>
        <td>${jake.derrota}</td>
        <td>${jake.pontos}</td>
        <td><button onClick="adicionarVitoria(jake)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(jake)">Empate</button></td>
        <td><button onClick="adicionarDerrota(jake)">Derrota</button></td>
      </tr>
      
               <tr>
        <td>${amy.nome}</td>
        <td>${amy.vitoria}</td>
        <td>${amy.empate}</td>
        <td>${amy.derrota}</td>
        <td>${amy.pontos}</td>
        <td><button onClick="adicionarVitoria(amy)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(amy)">Empate</button></td>
        <td><button onClick="adicionarDerrota(amy)">Derrota</button></td>
      </tr>
      
      <tr>
        <td>${boyle.nome}</td>
        <td>${boyle.vitoria}</td>
        <td>${boyle.empate}</td>
        <td>${boyle.derrota}</td>
        <td>${boyle.pontos}</td>
        <td><button onClick="adicionarVitoria(boyle)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(boyle)">Empate</button></td>
        <td><button onClick="adicionarDerrota(boyle)">Derrota</button></td>
      </tr>
      
      <tr>
        <td>${terry.nome}</td>
        <td>${terry.vitoria}</td>
        <td>${terry.empate}</td>
        <td>${terry.derrota}</td>
        <td>${terry.pontos}</td>
        <td><button onClick="adicionarVitoria(terry)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(terry)">Empate</button></td>
        <td><button onClick="adicionarDerrota(terry)">Derrota</button></td>
      </tr>
      
      <tr>
        <td>${rosa.nome}</td>
        <td>${rosa.vitoria}</td>
        <td>${rosa.empate}</td>
        <td>${rosa.derrota}</td>
        <td>${rosa.pontos}</td>
        <td><button onClick="adicionarVitoria(rosa)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(rosa)">Empate</button></td>
        <td><button onClick="adicionarDerrota(rosa)">Derrota</button></td>
      </tr>
      
            <tr>
        <td>${holt.nome}</td>
        <td>${holt.vitoria}</td>
        <td>${holt.empate}</td>
        <td>${holt.derrota}</td>
        <td>${holt.pontos}</td>
        <td><button onClick="adicionarVitoria(holt)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(holt)">Empate</button></td>
        <td><button onClick="adicionarDerrota(holt)">Derrota</button></td>
      </tr>
      
            <tr>
        <td>${scully.nome}</td>
        <td>${scully.vitoria}</td>
        <td>${scully.empate}</td>
        <td>${scully.derrota}</td>
        <td>${scully.pontos}</td>
        <td><button onClick="adicionarVitoria(scully)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(scully)">Empate</button></td>
        <td><button onClick="adicionarDerrota(scully)">Derrota</button></td>
      </tr>
      
            <tr>
        <td>${hitchcock.nome}</td>
        <td>${hitchcock.vitoria}</td>
        <td>${hitchcock.empate}</td>
        <td>${hitchcock.derrota}</td>
        <td>${hitchcock.pontos}</td>
        <td><button onClick="adicionarVitoria(hitchcock)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(hitchcock)">Empate</button></td>
        <td><button onClick="adicionarDerrota(hitchcock)">Derrota</button></td>
      </tr>
      
  `;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}
function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}
