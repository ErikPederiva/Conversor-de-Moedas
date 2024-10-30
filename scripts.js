let select1 = document.querySelector("#select-moeda-selecionada")
let select2 = document.querySelector("#select-moeda-convertida")

let logoMoeda = document.querySelector("#logo-moeda")
let logoMoeda2 = document.querySelector("#logo-moeda2")
let textoMoeda1 = document.querySelector("#texto-moeda1")
let textoMoeda2 = document.querySelector("#texto-moeda2")
let valorMoeda1 = document.querySelector("#valor-moeda1")
let valorMoeda2 = document.querySelector("#valor-moeda2")

let inputValor = document.querySelector("#input-valor")
let botaoConversao = document.querySelector("#botao-conversao")

let valorConvertido = 1
let dolarHoje = 1
let realHoje = 1
let euroHoje = 1
let libraHoje = 1
let bitcoinHoje = 1



// -------------------------------------------------------------------------SELECT 1
select1.addEventListener("change", valorSelect1)
function valorSelect1(){

    if (select1.value == "opçao-nada"){

        logoMoeda.src = "./assets/espera.png"
        valorMoeda1.innerHTML = "0"
        textoMoeda1.innerHTML = "Selecione uma moeda"
        inputValor.value = ""
        inputValor.disabled = true
    }


    if (select1.value == "opçao-real"){

        logoMoeda.src = "./assets/brasil.png"
        textoMoeda1.innerHTML = "Real"
        inputValor.placeholder = "R$ "
        inputValor.disabled = false

        inputValor.addEventListener("keyup", inputMoeda1)
        function inputMoeda1() {
            valorMoeda1.innerHTML = new Intl.NumberFormat("pt-br", {style: "currency", currency:"BRL"}).format(inputValor.value)
        }
        valorMoeda1.innerHTML = new Intl.NumberFormat("pt-br", {style: "currency", currency:"BRL"}).format(inputValor.value)

        realHoje = 1
        dolarHoje = 5.76
        euroHoje = 6.25
        libraHoje = 7.49
        bitcoinHoje = 415677.52
    }


    if (select1.value == "opçao-dolar"){

        logoMoeda.src = "./assets/EUA.png"
        textoMoeda1.innerHTML = "Dolar Americano"
        inputValor.placeholder = "US$ "
        inputValor.disabled = false

        inputValor.addEventListener("keyup", inputMoeda1)
        function inputMoeda1() {
            valorMoeda1.innerHTML = new Intl.NumberFormat("en-us", {style: "currency", currency:"USD"}).format(inputValor.value)
        }
        valorMoeda1.innerHTML = new Intl.NumberFormat("en-us", {style: "currency", currency:"USD"}).format(inputValor.value)

        realHoje = 0.1736111111111111
        dolarHoje = 1
        euroHoje = 1.0864
        libraHoje = 1.3013999
        bitcoinHoje = 71826.27
    }


    if (select1.value == "opçao-euro"){

        logoMoeda.src = "./assets/euro.png"
        textoMoeda1.innerHTML = "Euro"
        inputValor.placeholder = "€ "
        inputValor.disabled = false

        inputValor.addEventListener("keyup", inputMoeda1)
        function inputMoeda1() {
            valorMoeda1.innerHTML = new Intl.NumberFormat("pt-pt", {style: "currency", currency:"EUR"}).format(inputValor.value)
        }
        valorMoeda1.innerHTML = new Intl.NumberFormat("pt-pt", {style: "currency", currency:"EUR"}).format(inputValor.value)

        realHoje = 0.1592483
        dolarHoje = 0.9204713
        euroHoje = 1
        libraHoje = 1.1974411
        bitcoinHoje = 66048.89
    }


    if (select1.value == "opçao-libra"){

        logoMoeda.src = "./assets/libra.png"
        textoMoeda1.innerHTML = "Libra"
        inputValor.placeholder = "£ "
        inputValor.disabled = false

        inputValor.addEventListener("keyup", inputMoeda1)
        function inputMoeda1() {
            valorMoeda1.innerHTML = new Intl.NumberFormat("en-gb", {style: "currency", currency:"GBP"}).format(inputValor.value)
        }
        valorMoeda1.innerHTML = new Intl.NumberFormat("en-gb", {style: "currency", currency:"GBP"}).format(inputValor.value)

        realHoje = 0.1329398
        dolarHoje = 0.7684033
        euroHoje = 0.8347165
        libraHoje = 1
        bitcoinHoje = 55279.27
    }


    if (select1.value == "opçao-bitcoin"){

        logoMoeda.src = "./assets/bitcoin.png"
        textoMoeda1.innerHTML = "Bitcoin"
        inputValor.placeholder = "BTC "
        inputValor.disabled = false

        inputValor.addEventListener("keyup", inputMoeda1)
        function inputMoeda1() {
            valorMoeda1.innerHTML = new Intl.NumberFormat("en-us", {style: "currency", currency:"BTC"}).format(inputValor.value)
        }
        valorMoeda1.innerHTML = new Intl.NumberFormat("en-us", {style: "currency", currency:"BTC"}).format(inputValor.value)

        realHoje = 0.0000024
        dolarHoje = 0.000014
        euroHoje = 0.000015
        libraHoje = 0.000018
        bitcoinHoje = 1
    }
}



// -------------------------------------------------------------------------SELECT 2
select2.addEventListener ("change", valorSelect2)
function valorSelect2(){

    if (select2.value == "opçao-nada"){

        logoMoeda2.src = "./assets/espera.png"
        textoMoeda2.innerHTML = "Selecione uma moeda"
        valorMoeda2.innerHTML = "0"
    }


    if (select2.value == "opçao-real"){

        logoMoeda2.src = "./assets/brasil.png"
        textoMoeda2.innerHTML = "Real"
        valorMoeda2.innerHTML = "R$ 0,00"

        botaoConversao.addEventListener("click", conversao)
        function conversao () {
            valorConvertido = inputValor.value / realHoje
            valorMoeda2.innerHTML = new Intl.NumberFormat("pt-br", {style: "currency", currency:"BRL"}).format(valorConvertido) 
            console.log (valorConvertido)
        }

        conversao()
    }


    if (select2.value == "opçao-dolar"){

        logoMoeda2.src = "./assets/EUA.png"
        textoMoeda2.innerHTML = "Dolar Americano"
        valorMoeda2.innerHTML = "$ 0.00"

        botaoConversao.addEventListener("click", conversao)
        function conversao () {
            valorConvertido = inputValor.value / dolarHoje
            valorMoeda2.innerHTML = new Intl.NumberFormat("en-us", {style: "currency", currency:"USD"}).format(valorConvertido) 
            console.log (valorConvertido)
        }

        conversao()
    }


    if (select2.value == "opçao-euro"){

        logoMoeda2.src = "./assets/euro.png"
        textoMoeda2.innerHTML = "Euro"
        valorMoeda2.innerHTML = "0,00 €"

        botaoConversao.addEventListener("click", conversao)
        function conversao () {
            valorConvertido = inputValor.value / euroHoje
            valorMoeda2.innerHTML = new Intl.NumberFormat("pt-pt", {style: "currency", currency:"EUR"}).format(valorConvertido) 
            console.log (valorConvertido)
        }

        conversao()
    }


    if (select2.value == "opçao-libra"){

        logoMoeda2.src = "./assets/libra.png"
        textoMoeda2.innerHTML = "Libra"
        valorMoeda2.innerHTML = "£0.00"

        botaoConversao.addEventListener("click", conversao)
        function conversao () {
            valorConvertido = inputValor.value / libraHoje
            valorMoeda2.innerHTML = new Intl.NumberFormat("en-gb", {style: "currency", currency:"GBP"}).format(valorConvertido)
            console.log (valorConvertido)
        }

        conversao()
    }


    if (select2.value == "opçao-bitcoin"){

        logoMoeda2.src = "./assets/bitcoin.png"
        textoMoeda2.innerHTML = "Bitcoin"
        valorMoeda2.innerHTML = "BTC 0"

        botaoConversao.addEventListener("click", conversao)
        function conversao () {
            valorConvertido = inputValor.value / bitcoinHoje
            valorMoeda2.innerHTML = new Intl.NumberFormat("en-us", {style: "currency", currency:"BTC"}).format(valorConvertido)
            console.log (valorConvertido)
        }

        conversao()
    }
}
