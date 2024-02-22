const firstName = 'Vladilen'
const age = 29

function getAge(){
    return age
}

const output = `Hello my name is ${name} and my age is ${getAge() > 18 ? 'Can drive' : 'Can`t drive'}`

console.log(output)

console.log(firstName.length)
console.log(firstName.toUpperCase()) // возвращает новое значение
console.log(firstName.charAt(2)) // какой символ по индексу
console.log(firstName.indexOf('a')) // на каком индексе находится символ
console.log(firstName.startsWith('vla')) // начинается ли наша строчка с чего-то(true or false)
console.log(firstName.endsWith('len')) // заканчивается ли наша строчка на что-то(true or false)
console.log(firstName.repeat(2)) // дублирует строку n-ое кол-во раз




const password = '           my super pass   '

console.log(password.trim()) // убирает пробелы в начале и конце