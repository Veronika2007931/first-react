

// const containerEl = document.querySelector('.js-container')
// containerEl.addEventListener('click', onButtonClick)

const refs = {
    parent: document.querySelector('#parent'), 
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
}

refs.parent.addEventListener('click', onParentClick)
refs.child.addEventListener('click', onChildClick)
refs.innerChild.addEventListener('click', onInnerChildClick)

function onParentClick(event){
    console.log(event.currentTarget)
}

function onChildClick(event){
    console.log(event.currentTarget)
}

function onInnerChildClick(event){
    console.log(event.currentTarget)
}










// function onButtonClick(event){
//   if(event.target.nodeName !== 'BUTTON'){
//     return
//   }
//   console.log(event.target.nodeName)
//    console.log(event.target.textContent)
// }
// const container = document.querySelector('.js-container')

// container.addEventListener('click', onButtonClick)

// function onButtonClick(event) {
//   if(event.target.nodeName !== 'BUTTON'){
//     return;
//   }
//   console.log(event.target.nodeName);
//   console.log(event.target.textContent);
// }


const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
  ];

  function returnHtml(){
   return colors.map(([hex, rgb])=> {
        return `
          <div class="color-card">
        <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: "${hex}">

//         <div
//         class="color-swatch"
//         data-hex="${hex}"
//         data-rgb="${rgb}"
//         style="background-color: "${hex}">

      
//       </div>
//          <div class="color-meta">
//            <p>HEX:${hex} </p>
//            <p>RGB:${rgb} </p>
//          </div>
//        </div>`
    }).join('')
  }

// console.log(returnHtml())
// const div = document.querySelector('.js-palette')
// div.insertAdjacentHTML('beforeend', arr)


