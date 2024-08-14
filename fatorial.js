function calcular() {
    let numberFat = document.getElementById("entrada").value;
    let incremento = numberFat - 1;
    
    while (incremento > 1) {
        numberFat *= incremento;
        incremento --;

    }
    alert(numberFat)
}
