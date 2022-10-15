var alturaInput = document.querySelector(".input-altura");
var pesoInput = document.querySelector(".input-peso");
var calcularButton = document.querySelector(".calcular");
var resultado = document.querySelector(".resultado");
var final = document.querySelector(".resultado-final");
var IMC, altura, peso;

calcularButton.addEventListener("click", ()=>{

    altura = alturaInput.value;
    peso = pesoInput.value;
    IMC = peso/(altura**2); 
    resultado.innerText = IMC;

    if(IMC < 18.5){
        final.innerText = "Seu IMC está dentro da faixa de peso baixo";    
    }else if((IMC > 18.5) && (IMC < 24.9)){
        final.innerText = "Seu IMC está dentro da faixa de peso normal ou saudável";
    }else if((IMC > 25) && (IMC < 29.9 )){
        final.innerText = "Seu IMC está dentro da faixa de excesso de peso";
    }else{
        final.innerText = "Seu IMC está dentro da faixa de obesidade cuidado";
    }
});