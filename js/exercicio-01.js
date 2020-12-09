function Trocar(){
    let numero = document.getElementById("numero").nodeValue;

    if(numero<20){
        document.getElementById("mensagem").innerText = "Menor que 20";
    }
    else if(numero == 20)
    document.getElementById("mensagem").innerText = "Igual a 20";
    else {
        document.getElementById("mensagem").innerText = "Maior que 20"
    }
}