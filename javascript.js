// events html script
function meClicou() {
    document.getElementById("click").textContent = "me Clicou"
}

function meMudou() {
    let texto = document.getElementById("onchange").value;
    document.getElementById("change").textContent = texto;
}

function sobreMim() {
    document.getElementById("mouseOverOut").textContent = "Passou sobre mim"
}

function foraMim() {
    document.getElementById("mouseOverOut").textContent = "Saiu de mim"
}
