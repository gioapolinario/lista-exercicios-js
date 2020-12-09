function Trocar(){
    let numero = document.getElementById("numero").nodeValue;

    if(numero<100){
        document.getElementById("mensagem").innerText = "Menor que 100";
    }
    else {
        document.getElementById("mensagem").innerText = "Maior que 100"
    }
}