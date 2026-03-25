function TABLAS(){
    const aux_numero = document.getElementById('inputU');
    let num= Number(aux_numero.value);
    let tablaHTML = "<table border='2' style='border-collapse: collapse; text-align: center'>";
for (let i = 0; i <=num; i++) {
    tablaHTML += `<tr>`;
    for (let j = 0; j <=10 ; j++) {
        let dato = i*j;
        tablaHTML += `<td>${i}x${j}=<br><b>${dato}</b></td>`;
    }
    tablaHTML+= "</tr>"
}
tablaHTML+= "</table>"
document.getElementById("TABLAS").innerHTML = tablaHTML;
}