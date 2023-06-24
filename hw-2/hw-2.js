

// #2 
const figure = document.querySelector('.box')
console.log(figure)
const option = { trailing: true, leading: true }
window.addEventListener('mousemove', _.debounce(onFigureChange, 100, option ))

function onFigureChange(event){

const x  = event.clientX
const y = event.clientY


figure.style.transforme = `translate(${x}px, ${y}px)`
    
figure.style.top = `${y}px`
figure.style.left =  `${x}px`

console.log(x, y)

}

