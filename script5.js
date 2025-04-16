function converterTemperatura() {
    var temp = parseFloat(document.getElementById("temp").value);
    var opcao = document.getElementById("temperatura").value;
    var resultado;

    if (isNaN(temp)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
        return;
    }

    if (opcao === "celsius") {
        resultado = (temp * 9 / 5) + 32;
        document.getElementById("resultado").innerHTML = "A temperatura em Fahrenheit é: " + resultado.toFixed(2);
    } else if (opcao === "fahrenheit") {
        resultado = (temp - 32) * 5 / 9;
        document.getElementById("resultado").innerHTML = "A temperatura em Celsius é: " + resultado.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
}
