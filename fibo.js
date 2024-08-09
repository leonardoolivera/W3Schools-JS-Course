function fibo() {
    let list_fibo = [1, 2]
    var proxNum = 0;
    let i = 0;

    while (proxNum <= 4000000) {
        proxNum = list_fibo[i] + list_fibo[i + 1];
        if (proxNum > 4000000) {
            break
        }
        list_fibo.push(proxNum);
        i++;
    }
    document.getElementById("listaFibo").textContent = list_fibo.join(", ");


    function somarFibo() {
        let soma = 0;
        list_fibo.forEach(element => {
            if ((element % 2) == 0) {
                soma += element
            }
        }
        )
        return alert(soma);
    }
    somarFibo()

}
fibo()