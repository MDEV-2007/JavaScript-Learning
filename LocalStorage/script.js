// const number = 20
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', number.toPrecision())


const persone = {
    name: 'Murodulla',
    age: '16',
    car: 'BMW'
}
// localStorage ga json formatda o'tkazish
localStorage.setItem('persone', JSON.stringify(persone))

const localDate = localStorage.getItem('persone')

// localStorage malumotni o'zgartirish
const personeInfo = JSON.parse(localDate)

personeInfo.name = 'Yusuf'
personeInfo.age = '21'
personeInfo.car = 'Captiva'

console.log(personeInfo);

localStorage.setItem('updatepersone', JSON.stringify(personeInfo))

// const json = JSON.stringify(persone)
// console.log(json);

// const obj = JSON.parse(json)
// console.log(obj);