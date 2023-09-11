
function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let suma = num1 + num2;

    let resultadoElement = document.getElementById("Resultado");
    resultadoElement.innerHTML = "La suma es: "+ suma;
    resultadoElement.classList.add("Mostrar");

    if (suma > 10 ){
        resultadoElement.className = "alert alert-success mostrar";
    }else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("CalcularBtnSuma").addEventListener("click", sumar);


function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let multiplicacion = num1 * num2;

    let resultadoElement = document.getElementById("Resultado");
    resultadoElement.innerHTML = "La multiplicacion es: "+ multiplicacion;
    resultadoElement.classList.add("Mostrar");

    if (multiplicacion > 10 ){
        resultadoElement.className = "alert alert-success mostrar";
    }else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("CalcularBtnMulti").addEventListener("click", multiplicar);

function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa numeros validos en ambos campos.");
        return;
    }

    let division = num1 / num2;

    let resultadoElement = document.getElementById("Resultado");
    resultadoElement.innerHTML = "La division es: "+ division;
    resultadoElement.classList.add("Mostrar");

    if (division > 10 ){
        resultadoElement.className = "alert alert-success mostrar";
    }else{
        resultadoElement.className = "alert alert-danger mostrar";
    }
}

document.getElementById("CalcularBtnDivi").addEventListener("click", dividir);
