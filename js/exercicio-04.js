function Trocar(){
    let numero = document.getElementById("numero").nodeValue;

    if(numero<18){
        document.getElementById("mensagem").innerText = "Menor que 18";
    }
    else if(numero == 18)
    document.getElementById("mensagem").innerText = "Igual a 18";
    else {
        document.getElementById("mensagem").innerText = "Maior que 18"
    }
}
