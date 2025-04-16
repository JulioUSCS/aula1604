function dolar(){

    var valor = parseFloat(document.getElementById("valor").value)

    var caculo = valor / 6;

    if (isNaN(caculo)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
    } else {
        document.getElementById("resultado").innerHTML = "O valor em Dolares é de: " + caculo.toFixed(2); // Arredonda para 2 casas decimais
    }

}

function euro(){

    var valor = parseFloat(document.getElementById("valor").value)

    var caculo = valor / 6.72;

    if (isNaN(caculo)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
    } else {
        document.getElementById("resultado").innerHTML = "O valor em Euro é de: " + caculo.toFixed(2); // Arredonda para 2 casas decimais
    }

}

function libra(){

    var valor = parseFloat(document.getElementById("valor").value)

    var caculo = valor / 7.71;

    if (isNaN(caculo)) {
        document.getElementById("resultado").innerHTML = "Digite um valor válido";
    } else {
        document.getElementById("resultado").innerHTML = "O valor em Libra é de: " + caculo.toFixed(2); // Arredonda para 2 casas decimais
    }

}