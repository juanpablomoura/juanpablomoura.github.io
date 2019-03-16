
function calcularRaiz(arg) {
    var raiz = Math.sqrt(arg);
    alert('A raiz de ' + arg + ' é ' + raiz);
}

function escreverNumeros() {
    var num = prompt("Digite um número qualquer:");
    for (i=1; i<=num; i++) 
        document.getElementById("sequencia").innerHTML += i + " ";
}
