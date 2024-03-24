let text = document.querySelector('.text')
let open = document.querySelector('.open-btn')
let model = document.querySelector('.model-text')
let close = document.querySelector('.close-btn')
let form = document.querySelector('.form')
let message = document.querySelector('.message')

// No use
// function hover(){
//     text.textContent = 'Va Alykum Assalom'
// }
// No use

// text.onmouseenter = hover



// This is events atribut
text.addEventListener('mouseenter', function() {
    text.textContent = 'Va Alykum Assalom'
})
text.addEventListener('mouseleave', function() {
    text.textContent = 'Assalomu Alaykum'
})

// Modelni Window

open.addEventListener('click', function() {
    model.style.display = 'block'
})
close.addEventListener('click', function() {
    model.style.display = 'none'
})

form.addEventListener('input', function() {
    message.value =  `Mening ismim ${form.value} va yoshim 16 da`
})


