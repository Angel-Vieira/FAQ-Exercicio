let setaClique = document.querySelectorAll(".pergunta")
let conteudos = document.querySelectorAll(".contend")
let seta = document.querySelectorAll('.texto-e-seta')

setaClique.forEach(function(item, index){
  item.addEventListener("click", function ()  {
  let estaOculto = !conteudos[index].classList.contains('conteudo-mostrado')
  
  if(estaOculto){
      conteudos.forEach(function(item, index){
      item.classList.remove('conteudo-mostrado')
      seta[index].classList.remove('ativo')
      })
      conteudos[index].classList.add('conteudo-mostrado')
      seta[index].classList.add('ativo')
    
  }else{    
    conteudos[index].classList.remove('conteudo-mostrado')
    seta[index].classList.remove('ativo')
  }
  })
})


  










