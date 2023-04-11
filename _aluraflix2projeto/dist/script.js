function adicionarFilme(){
  var filmFav = document.getElementById('filme').value
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmFav + '>'
  document.getElementById('filme').value = ''
}