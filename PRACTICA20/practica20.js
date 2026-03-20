function valores(){
 const aux_num1= document.getElementById('num1');
const aux_num2= document.getElementById('num2');
let num1=Number(aux_num1.value);
let num2=Number(aux_num2.value);
document.getElementById("suma").innerText=num1+num2;
document.getElementById("resta").innerText=num1-num2;
document.getElementById("divicion").innerText=num1/num2;
document.getElementById("mult").innerText=num1*num2;
document.getElementById("exponente1").innerText=num1**2;
document.getElementById("exponente2").innerText=num2**2;
}