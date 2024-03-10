// ========== Function Declaration ==========

/* function greet(name) {
    console.log("Hello - ", name)
}

// ========== Function Expression ============

const greet2 = function(name) {       // анонимная функция
    console.log('2 Hello - ', name)
} */


// Разница в том, что Function Declaration можно сначала вызвать, а потом обьявить. С Function Expression так не работает(нужно задавать и вызывать по очереди)

/* greet2('Timur')
console.log( typeof greet) // функция имеет тип данных Обьект

setTimeout(greet('Timur'), 1500) // функция и 1500 мс(задержка)
setTimeout(function() {
    console.log('TimuOut')
}, 1500) */

/* let counter = 0
const interval = setInterval(() => {
    if (counter === 5){
        clearInterval(interval)
    }else{
        console.log(++counter)
    }
},2000) // выполняет каждые 2 секунды */

// =============== Arrow Function =================

const arrow = (name) => {
    console.log('Hello - ' + name)
}

arrow('Timur')

const arrow2 = (name) => console.log('Hello - ' + name)

function pow(num, exp) {
    return Math.pow(num,exp)
}

console.log(pow(2,3))

const pow2 = (num, exp) => Math.pow(num,ext)

// ============ Default Parameters ==============
const sum = (a = 40,b = a / 2) => a + b

console.log(sum(40,2)) // 42
console.log(sum())

function sumAll(... numbers) { // ... - operator spread(распространение)
    // let res = 0
    // for(let num of numbers){
    //     res += num
    // }
    // return res

    return numbers.reduce((acc, cur) => acc += cur, 0)
}

console.log(sumAll(1,2,3,4,5,6))


// ============== Closures(замыкание) ==================

function createPerson(name) {
    return function(lastname) {
        console.log(`${name} ${lastname}`)
    }
}

const addLastName = createPerson('Timur')
addLastName('Gapter')
addLastName('Minin')

function createCounter(startValue){
    num = startValue
    return {
        inc: function() {
            return num += 1
        },
        dec: function() {
            return num -= 1
        },
        get: function() {
            return num
        }
    }
}

const {inc,dec,get} = createCounter(5)
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7