function CALCULAR(){
    let kg= Number(document.getElementById("peso").value);
    let estatura= Number(document.getElementById("estatura").value);
    let imc= kg/(estatura**2);
    let estado;
    if (imc<18.5) {
        estado="Bajo Peso"
    }else if (imc>=18.5 && imc<=24.9) {
        estado="Normal"
    } else if (imc>=25 && imc<=29.9){
        estado="Sobrepreso"
    } else if (imc>=30 && imc<=34.9){
        estado="Obesidad I"
    } else if (imc>=35 && imc<=39.9){
        estado="Obesidad II"
    } else if (imc>=40 && imc<=49.9){
        estado="Obesidad III"
    } else{
        estado="Obesidad IV"
    }
    document.getElementById("estado").innerText=estado;
}