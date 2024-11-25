console.log('--------- task 1---------');
const word = prompt("Введите слово или фразу")
if (word !== '') {
    let wordArray = []
    wordArray = word.toLowerCase().replaceAll(' ', '').split('')
    let reverseArray = []
    reverseArray = word.toLowerCase().replaceAll(' ', '').split('').reverse()

    if (wordArray.join('') === reverseArray.join('')) {
        console.log(`Слово ${word} является палиндромом`)
    } else {
        console.log(`Слово ${word} не является палиндромом`)
    }
} else {
    alert("Не введено слово!")
}

console.log('--------- task 2---------');
const mas = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
console.log(new Set(mas));

console.log('--------- task 3---------');
const num = prompt("Введите число")
let arr = []
for (let i = 0; i < +num; i++) {
    arr.push(i)
}
console.log(arr)

console.log('--------- task 4---------');
let numChar = 0
for (let i = 0; i < 3; i++) {
    let row = ''
    for (let j = 0; j < 3; j++) {
        ++numChar
        if (numChar % 2 === 0) {
            row += "o" + ' '
        } else {
            row += "x" + ' '
        }
    }
    console.log(row)
}

console.log('--------- task 5---------');
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

let keyNames = ['some', 'dom', 'arr', 'tom'];
let arrEl = [];
for (let key of keyNames) {
    if (key === 'arr') {
        for (let el in obj[key]) {
            arrEl.push(el);
        }
    } else {
        arrEl.push(obj[key])
    }
}
console.log(arrEl)