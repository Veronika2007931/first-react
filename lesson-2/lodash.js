const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove',onMouseMove);

function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;
  
    coordsOutputRef.textContent = `
      Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
      X: ${event.clientX},
      Y:${event.clientY}
    `;
  }

  const inputRef = document.querySelector('.js-input');
  const outputRef = document.querySelector('.js-output');
  let inputCbInvocationCounter = 0;
  const option = { trailing: true, leading: true }
  
  
  inputRef.addEventListener('input', _.debounce(onInputChange, 600, option));
  
  function onInputChange(event) {
    inputCbInvocationCounter += 1;
  
    outputRef.textContent = `
      Кількість викликів onInputChange: ${inputCbInvocationCounter},
      Значення: ${event.target.value}
    `;
  }










