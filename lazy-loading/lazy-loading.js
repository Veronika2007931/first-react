const img = document.querySelectorAll('.img')

const options = {
  rootMargin: '150px'
}
const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
   if(entry.isIntersecting){
    const image = entry.target
    const imgUrl = image.dataset.lazy
     image.src = imgUrl
     image.classList.add('appear')

     observer.unobserve(image)
   }
    });
}, options )
img.forEach(image => io.observe(image))















