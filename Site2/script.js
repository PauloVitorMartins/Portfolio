let caminhoHUm = document.querySelector("h1");
caminhoHUm.id = "title"
const pixelBoard = document.querySelector('#pixel-board');


let elementosCores = document.querySelector('#color-palette');
function selecionaCorPaleta (){
    let caminhoDivUm   = document.getElementsByClassName("color")[0];
    
    caminhoDivUm.classList.add('selected')
    let caminhoDivDois = document.getElementsByClassName("color")[1];
    
    let caminhoDivTres = document.getElementsByClassName("color")[2]; 
    
    let caminhoDivQua = document.getElementsByClassName("color")[3] 
} 
selecionaCorPaleta();

function generateDivs() {
    const butt = document.querySelector('#but')
    butt.addEventListener('click', function(){
    const input = document.querySelector('#numeroInput');
    let valorIput;
    valorIput = input.value;
   for (let index = 0; index < valorIput*valorIput; index += 1) {
          const div = document.createElement('div');
          div.classList.add('pixel') ;
          pixelBoard.appendChild(div);
          const caminhoPixel = document.querySelectorAll('.pixel');      
        for(let indexSt of caminhoPixel){
          indexSt.addEventListener('click', event => {
                const caminhoSelected = document.querySelector(".selected");
                event.target.style.backgroundColor = caminhoSelected.value;
        });
    }    
        }  }  
     )}
 generateDivs()  
 

const coresPaleta = document.querySelectorAll('.color');

for(let indexT of coresPaleta){
    indexT.addEventListener('click', event => {  
        for(let indexSu of coresPaleta){
            if(indexSu.classList.contains("selected")){
                indexSu.classList.remove("selected")
            }else{
                event.target.classList.add('selected')
        }          
        }
        })    
    }
    
    
    const caminhoPixelBoard = document.querySelector("#pixel-board") 
    
    
    function pintaDiv(){ 
        const caminhoPixel = document.querySelectorAll('.pixel');      
        for(let indexSt of caminhoPixel){
          indexSt.addEventListener('click', event => {
                const caminhoSelected = document.querySelector(".selected");
                event.target.style.backgroundColor = caminhoSelected.value;
        });
    }    
    }
pintaDiv()

   


function adicionaMovimentoBot(){
let caminhoBotao = document.getElementById("botao")
let botaoNovo = document.createElement("button")
caminhoBotao.appendChild(botaoNovo);
botaoNovo.innerText = 'Limpar';
botaoNovo.id = 'clear-board';
    botaoNovo.addEventListener("click", function(){
        const caminhoPixel = document.querySelectorAll('.pixel')
    for(let indexSupremo in caminhoPixel){
        let corz = getComputedStyle(caminhoPixel[indexSupremo]).backgroundColor
        if (corz !== "white" || corz === 'white'){
            caminhoPixel[indexSupremo].style.backgroundColor = 'white';
        }
    }
})
 }
adicionaMovimentoBot();

 
     
     
    

     