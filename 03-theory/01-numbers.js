const num = 42 // integer
const float = 42.42 // float
const pow = 10e3 // 10^3
const big = 1_000_000 

console.dir(Number)
console.log(Number.MAX_SAFE_INTEGER) // самое большое безопасное число
console.log(Math.pow(2,53) - 1) // возводит степень в число
console.log(Number.MAX_SAFE_INTEGER) // минимальное безопасное число
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY) // бесконечность
console.log(Number.isFinite(1 / 0)) // проверяет бесконечность ли это или конечное число(true or false)

const weird = 23 / undefined
console.log(Number.isNaN(weird)) // проверяет NaN или нет(для проверки)

const srtInt = '42'
const strFloat = '42.42'

console.log(Number.parseInt(srtInt))
console.log(Number.parseFloat(strFloat)) // можно без Number.
console.log(+srtInt,+strFloat) // приводит к числу

console.log(0.1 + 0.2) // 0.300000000000004(вывод)
console.log(+(0.1 + 0.2).toFixed(10)) // округляет число и возвращает строку

// ================== BigInt ===============

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 123124123n)
console.log(typeof -42n) // BigInt не может быть целочисленным и все операции только BigInt с BigInt

// console.log(10n - 4) // error
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n) // 2n (вывод)

// ================== Math ==================

console.log(Math.E)
console.log(Math.PI)

const myNum = 4.9

console.log(Math.sqrt(25))
console.log(Math.pow(2,3))
console.log(Math.abs(-42))
const numArr = [1,10,256,6311,0]
console.log(Math.max(numArr))
console.log(Math.min(numArr))

console.log(Math.floor(myNum)) // округление в меньшую сторону
console.log(Math.ceil(myNum)) // округление в большую сторону
console.log(Math.round(myNum)) // округляет до ближайшего(как обычно)
console.log(Math.trunc(myNum)) // возвращает целую часть

console.log(Math.random()) // рандомное число от 0 до 1



function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const num1 = getRandomNumber(10,100)
console.log(num1)