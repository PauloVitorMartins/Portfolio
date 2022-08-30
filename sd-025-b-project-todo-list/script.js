function criarLi(){
const caminhoBot = document.querySelector("#criar-tarefa");
caminhoBot.addEventListener('click', function(){
const caminhoValorInput = document.querySelector("#texto-tarefa");
const caminhOndeCriaLista = document.querySelector("#lista-tarefas");
const criaLi = document.createElement('li');
    criaLi.classList.add('item');
    if(caminhoValorInput.value !== ''){
    criaLi.innerText = caminhoValorInput.value;
    caminhOndeCriaLista.appendChild(criaLi); 
    caminhoValorInput.value = '';
    const itemList = document.querySelectorAll('.item')
    for(let i of itemList){
       i.addEventListener('mouseover', event => {
            for(let iD of itemList){
                if(iD.classList.contains('back')){
                iD.classList.remove('back')
            }
            }
                 event.target.classList.add('back')
            })
    }       
    }
    }
    )}    
criarLi();

function riscaLista(){
    const caminhOndeCriaLista = document.querySelector("#lista-tarefas")
    caminhOndeCriaLista.addEventListener('dblclick', event => {
        if(event.target.classList.contains('completed')){
           event.target.classList.remove('completed')
        } else {
             event.target.classList.add('completed')
        }   
    })
}
riscaLista();

function apagaTudo(){
    const caminhoList = document.querySelector("#lista-tarefas")
    const caminhoBotApag = document.querySelector("#apaga-tudo")
    caminhoBotApag.addEventListener('click', function(){  
        caminhoList.innerHTML = '';                            
    })
}
apagaTudo();

function apagaSelecionados(){
    const caminhoTarefas = document.querySelector("#lista-tarefas")
    const caminhoBotApagaFi = document.querySelector("#remover-finalizados")
    const filhos = caminhoTarefas.childNodes
        caminhoBotApagaFi.addEventListener('click', () => { 
            const caminhoListI = document.querySelectorAll(".completed")
            for(let i of caminhoListI){
                    if(i.classList.contains('completed')){
                        i.remove();
                }
            }                    
     })
        }
apagaSelecionados();

    

