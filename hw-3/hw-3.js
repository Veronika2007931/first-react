const img = document.querySelectorAll('.imageEl')

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const image = entry.target
            const imageUrl = image.dataset.src 
            image.src = imageUrl
            image.classList.add('appear')

            observer.unobserve(image)
        }
    })
})

img.forEach(image => io.observe(image))


// Спочатку створємо копію класу IntersectionObserver і прописуєммо базову 
// розмітку а також відслідковуємо елемент(як написано на 16 рядку) далі
//  пишемо код що якщо ентрі(тобто один елемент з  маству) видимий 
// на екрані то ми вставляємо в scr посилання з дата атрибуту а також додаємо
// клас appear для плавнішої появи зображення і після знімаємо 
// відслідковування з елемента
