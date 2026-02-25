const numero1 = document.getElementById("nota1")
const button = document.getElementById("button")

function calculaMedia(){
    console.log(numero1.value)
}

button.addEventListener("click", calculaMedia)