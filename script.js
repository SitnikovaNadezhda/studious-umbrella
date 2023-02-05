
const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function () {
        console.log('Greet!')
    }
})
Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')


let count = '5';
let userName = 'Alex';

count = count * 5;
console.log(count);

let p = prompt("Введите ваше имя!");
function hello(n) {
    alert(`Привет, ${p}`);
}
hello();
