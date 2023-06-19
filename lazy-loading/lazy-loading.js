const img = document.querySelectorAll('.img')
const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
   if(entry.isIntersecting){
    const image = entry.target
    const imgUrl = image.dataset.lazy
     image.src = imgUrl
     image.classList.add('appear')
   }
    });
})
img.forEach(image => io.observe(image))















