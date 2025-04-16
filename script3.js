function celsius() {
    var temp = parseFloat(document.getElementById("temp").value);

    var resultado = (temp - 32) * 5 / 9;

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
    } else {
        document.getElementById("resultado").innerHTML = "A temperatura em Celsius é: " + resultado.toFixed(2); // Arredonda para 2 casas decimais
    }
}

function fahrenheit() {
    var temp = parseFloat(document.getElementById("temp").value);

    var resultado = (temp * 9 / 5) + 32;

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
    } else {
        document.getElementById("resultado").innerHTML = "A temperatura em Fahrenheit é: " + resultado.toFixed(2); // Arredonda para 2 casas decimais
    }
}
