// Função para limpar o display da calculadora
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// Função que mostra no display da calculadora a cada digito
function display(value) {
    if(value == 'del'){
        var len = String(document.getElementById("result").value).length;
        document.getElementById("result").value = String(document.getElementById("result").value).slice(0, len-1);
    }
    else
        document.getElementById("result").value += value;
}
 
// Funcão que calcula a expressão escrita na calculadora
function calculate() {
    var a = document.getElementById("result").value;
    document.getElementById("result").value = eval(a);
}