

// #2 
const figure = document.querySelector('.box')

const option = { trailing: true, leading: true }
window.addEventListener('mosemove', _.debounce(onFigureChange, 100, option ))

function onFigureChange(event){
    
figure.style.top = event.clientX
figure.style.left = event.clientY

}

