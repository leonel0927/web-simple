function VALORES(){
    const A= document.getElementById("A");
    const B= document.getElementById("B");
    const C= document.getElementById("C");
    let A_op= Number(A.value);
    let B_op= Number(B.value);
    let C_op= Number(C.value);

    let x1= (-B_op-(Math.sqrt(B_op**2-(4*(A_op*C_op)))))/(2*A_op);
    let x2= (-B_op+(Math.sqrt(B_op**2-(4*(A_op*C_op)))))/(2*A_op);
    document.getElementById("resX1").innerText=x1;
    document.getElementById("resX2").innerText=x2;
}