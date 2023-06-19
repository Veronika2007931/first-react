const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove,300));
 
// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;
  
//     coordsOutputRef.textContent = `
//       Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//       X:${event.clientX},
//       Y:${event.clientY}
//     `;
//   }

//   const inputRef = document.querySelector('.js-input');
//   const outputRef = document.querySelector('.js-output');
//   let inputCbInvocationCounter = 0;
//   const option = { trailing: true, leading: true }
  
  
//   inputRef.addEventListener('input', _.debounce(onInputChange, 600, option));
  
//   function onInputChange(event) {
//     inputCbInvocationCounter += 1;
  
//     outputRef.textContent = `
//       Кількість викликів onInputChange: ${inputCbInvocationCounter},
//       Значення: ${event.target.value}
//     `;
//   }

const input = dpcumen.querySelector('.js-input')

input.addEventListener('input', _.debounce(onInput, 500))

function onInput(event){
  return console.log( event.target.value)
}






