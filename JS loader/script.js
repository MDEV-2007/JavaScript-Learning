window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader')
    setTimeout( () =>{
        loader.style.opacity = '0'
        setTimeout( () =>{
            loader.style.dispaly = 'none'
        },500)
    },5000)
})