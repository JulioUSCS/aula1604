
        // Função que realiza o cálculo da soma

        function somar() {

            // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
            var num1 = parseFloat(document.getElementById("num1").value);

            // Criação da variável 'num2' com o valor do segundo campo, convertido para número
            var num2 = parseFloat(document.getElementById("num2").value);

            // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
            var soma = num1 + num2;

            // Verificação para garantir que os valores são números válidos
            if (isNaN(soma)) {
                // Exibe mensagem de erro se os valores não forem numéricos
                document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
            } else {
                // Atualiza o parágrafo com o resultado da soma
                document.getElementById("resultado").innerHTML = "A soma é: " + soma;
            }
        }

        function subtracao(){

            var num1 = parseFloat(document.getElementById("num1").value);

            var num2 = parseFloat(document.getElementById("num2").value);

            var subtracao = num1 - num2;

            if(isNaN(subtracao)){
                document.getElementById("resultado").innerHTML = "Pro favor, digite um número valido"

            } else {
                document.getElementById("resultado").innerHTML = "A subtração é: " + subtracao;
            }
        }

        function multiplica(){

            var num1 = parseInt(document.getElementById("num1").value);

            var num2 = parseInt(document.getElementById("num2").value);

            var multiplica = num1 * num2;

            if(isNaN(multiplica)){
                document.getElementById("resultado").innerHTML = "Pro favor, digite um número valido";

            } else {
                document.getElementById("resultado").innerHTML = "A subtração é: " + multiplica;
            }

        }

        function divisao(){

            var num1 = parseInt(document.getElementById("num1").value);

            var num2 = parseInt(document.getElementById("num2").value);

            var divisao = num1 / num2;

            if(isNaN(divisao)){
                document.getElementById("resultado").innerHTML = "Pro favor, digite um número valido";

            } else {
                document.getElementById("resultado").innerHTML = "A subtração é: " + divisao;
            }

        }