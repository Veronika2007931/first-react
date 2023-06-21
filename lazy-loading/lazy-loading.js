const img = document.querySelectorAll('.img')

const options = {
  rootMargin: '150px'
}

// isIntersecting це чи завантажилось воно на сторінці чи ні типу в вьюпорті
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















