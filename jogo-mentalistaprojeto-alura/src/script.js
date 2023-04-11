var numeroSecreto = parseInt(Math.random() * 1001)
var nu

while(chute != numeroSecreto){
var chute = prompt("Escolha um número de 0 a 1000")

if(chute == numeroSecreto){
  alert("Acertou!") 
}
else if (chute > numeroSecreto) {
  alert("Errou! Tente um número menor.")
}
else if (chute < numeroSecreto) {
  alert("Errou! Tente um número maior.")
}
}