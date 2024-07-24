//criar variaveis retornando elementos DOM
const cxPrincipal = document.querySelector(".cxPrincipal")
//const cxResultado = document.querySelector(".cxResultado")
const cxResultado = document.querySelector("#resultado")
const btnCalcular = document.querySelector("#btnCalcular")
const btnLimpar = document.querySelector("#btnLimpar")

const inputNome = document.querySelector("#nome")
const inputAltura = document.querySelector("#altura")
const inputPeso = document.querySelector("#peso")

//funções
const limpaCampo = () => {
    inputNome.value = ""
    inputAltura.value = ""
    inputPeso.value = ""
}

const validaNum = (num) =>{
    return num.replace(/[^0-9,]/g,"")
}

const ocultarForm = () =>{
    cxPrincipal.classList.toggle("ocultar")
    cxResultado.classList.toggle("ocultar")
}

//eventos
inputAltura.addEventListener("input",(evt) =>{
    const validNum = validaNum(evt.target.value)
    evt.target.value = validNum
})

inputPeso.addEventListener("input",(evt) =>{
    const validNum = validaNum(evt.target.value)
    evt.target.value = validNum
})

btnLimpar.addEventListener("click",(evt)=>{
    if((inputNome.value != "")&&(inputAltura.value != "")&&(inputPeso.value != "")){
        limpaCampo()
    }else{
      alert("Campos já limpos.")
    }  
})

btnCalcular.addEventListener("click",(evt)=>{
    
    if((inputNome.value != "")&&(inputAltura.value != "")&&(inputPeso.value != "")){
        
        //calculo IMC
        let imc = Number.parseFloat(inputPeso.value.replace(",",".")) / (Number.parseFloat(inputAltura.value.replace(",",".")) * Number.parseFloat(inputAltura.value.replace(",",".")))

        let imcRes = ""

        if (imc < 19.1)
        {
            // imcRes = inputNome.value.toString() + " ,IMC = " + imc.toFixed(2).toString() + " e está abaixo do peso."
            imcRes = `${inputNome.value.toString()}, IMC =  ${imc.toFixed(2).toString()} e está abaixo do peso.`
        }
        else if (imc > 19.2 && imc <= 25.8)
        {
            imcRes = inputNome.value.toString() + ", IMC = " + imc.toFixed(2).toString() + " e está no peso normal."
        }
        else if (imc > 25.9 && imc <= 27.3)
        {
            imcRes = inputNome.value.toString() + ", IMC = " + imc.toFixed(2).toString() + " e está marginalmente acima do peso."
        }
        else if (imc > 27.4 && imc <= 32.3)
        {
            imcRes = inputNome.value.toString() + ", IMC = " + imc.toFixed(2).toString() + " e está acima do peso ideal."
        }
        else if (imc > 32.4)
        {
            imcRes = inputNome.value.toString() + ", IMC = " + imc.toFixed(2).toString() + " e está obeso."
        }

        console.log(imc)
        console.log(imcRes)

        // const divResult = document.createElement("div")
        // divResult.setAttribute("id", "resultado")
        // divResult.setAttribute("class", "cxResultado")
        // divResult.innerHTML = imcRes
        // cxResultado.appendChild(imcRes)

        cxResultado.innerHTML = imcRes

        ocultarForm()
    }else{
        alert("Preencha os campos.")
    } 
})