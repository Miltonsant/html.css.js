 const yesButton = document.querySelector('.yes')
 const noButton = document.querySelector('.No')
 const messageDiv = document.getElementById('message')

 noButton.addEventListener('click',() =>{
    let larguraAtual = parseFloat(getComputedStyle(yesButton).width)

    let alturaAtual = parseFloat(getComputedStyle(yesButton).height)

    yesButton.style.width = (larguraAtual + 20) + 'px'
    yesButton.style.height = (alturaAtual + 20) + 'px'
    yesButton.style.background = 'green'

    
 })

 yesButton.addEventListener('click', () =>{
   messageDiv.textContent = 'Jesus está esperando seu retorno'
   messageDiv.style.display = 'block'
})

 