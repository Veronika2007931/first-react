const img = document.querySelectorAll('.imgageEl')

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const image = entry.target
            const imageUrl = image.dataset.src 
            image.crs = imageUrl

            observer.unobserve(image)
        }
    })
})