function converterMoeda() {
    var valor = parseFloat(document.getElementById("valor").value);
    var opcao = document.getElementById("moeda").value;
    var resultado;

    if (isNaN(valor)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
        return;
    }

    if (opcao === "dolar") {
        resultado = valor / 6;;
        document.getElementById("resultado").innerHTML = "O valor em Dolares é de: " + resultado.toFixed(2);
    } else if (opcao === "euro") {
        resultado = valor / 6.72;
        document.getElementById("resultado").innerHTML = "O valor em Euro é de: " + resultado.toFixed(2);
    } else if (opcao === "libra"){
        resultado = valor / 7.71;
        document.getElementById("resultado").innerHTML = "O valor em Libra é de: " + resultado.toFixed(2);;
    }
}
