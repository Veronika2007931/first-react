

// #2 
const figure = document.querySelector('.box')

const option = { trailing: true, leading: true }
figure.addEventListener('mosemove', _.debounce(onFigureChange, 100, option ))

function onFigureChange(event){
    
figure.clientX = event.clientX
figure.clientY = event.clientY

}

