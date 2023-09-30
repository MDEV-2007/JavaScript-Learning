const open = document.getElementById('open')
const close = document.getElementById('close')
const model = document.getElementById('here')

function myfunk(){
    var num1 = 50;
        num2 = 40;
    var res = num1+num2
    console.log(res);
    document.getElementById('test').innerHTML = res

    }

function darkMode() {
    document.getElementById('body').style.backgroundColor = 'red'
    document.getElementById('back').innerHTML = 'orqa rang qizil'
}

function change() {
    document.getElementById('body').style.backgroundColor = 'white'
}

function dt() {
    document.getElementById('data').innerHTML = Date()
}



open.addEventListener('click', (event) => {
    model.style.display = 'block'
    
})

close.addEventListener('click', (event) => {
    model.style.display = 'none'
})




