function gerarCor(  ) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}
gerarCor();
console.log(gerarCor())

function mudaCorInicio(){
    const pInicio = document.querySelector("#rgb-color")
        pInicio.innerText = gerarCor()
    }
mudaCorInicio();

function coloreBolinhas(){
    const p = document.querySelector("#rgb-color")
    const bola = document.querySelectorAll(".ball")
    for(let i of bola){
    i.style.backgroundColor = gerarCor()
    }
    bola[Math.round(Math.random() * 5)].style.backgroundColor = p.innerText
    console.log(p.innerText)
}
coloreBolinhas();

function comecaJogo(){
    const corAdvinha = document.querySelector('#rgb-color')
    const p = document.querySelector("#answer")
    const bola = document.querySelectorAll(".ball");
    for(let i of bola){
          i.addEventListener('click', function(){
            const iStyle = getComputedStyle(i).backgroundColor
            console.log(iStyle)
            console.log(corAdvinha.innerHTML)
        if(iStyle === corAdvinha.innerText){
            p.innerText = 'Acertou!'
        }
        else {
            p.innerText = 'Errou! Tente novamente!'
        }
    })
    }
}
comecaJogo();

function reiniciaJogo(){
    const botaoRei = document.querySelector("#reset-game");
    botaoRei.addEventListener("click", function(){
        location.reload()
    }
    )}
reiniciaJogo();