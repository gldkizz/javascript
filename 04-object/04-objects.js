const person = {
    name: 'Timur',
    age: 18,
    isYoutuber: false,
    languages: ['ru','en'],
    address: {
        city: 'Kazan',
        street: 'Baki Urmanche',
    },
    'complex key': 'complex',
    ['key_' + 21 * 2]: 'computed value',
    greet() {
        console.log('Greet from Person',this.name)
    },
    arrow: () => {
        console.log(this)
    },
    info() {
        console.log(this)
    },
}

const updateObj = {
    name: 'Vladilen',
    age: 20,
}

const newObj = {
    ...person,
    ...updateObj // берёт значение из первого обьекта и обновляет значения из второго
}


// console.log(person)
// person.info()
// person.arrow() // стрелочная функция не создаёт свой собстенный контекст(он не перенимает контекст обьекта Person)


// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])

// person.age++
// person.languages.push('de')
// console.log(person.languages)

// person.adress = undefined
// delete person.address
// console.log(person)

// =============== Деструктуризация =============== \\

// const name = 'Petr'

// const {age,name: firstName = 'TEST',languages} = person

// console.log(age,languages,firstName)

// ================================================= \\

// =============== Перебор обьекта ================= \\
// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//         console.log(person[key])
//     }
// }

// Object.keys(person).forEach(key => {
//     console.log(person[key])
// })

// ================================================== \\

const logger = {
    keys(withText = true) {
        if (withText) {
            console.log('Object keys:', Object.keys(this))
        } else{
            Object.keys(this)
        }
        
    },

    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log('Key:',key)
            console.log('Value:',this[key])
        })
    },
}

// const bound = logger.keys.bind(person)
// bound()

// logger.keys.bind(person)() // То же самое

logger.keys.call(person, false) // как и bind, только сразу вызывает функцию
logger.keys.apply(person, [false]) // просто по написанию


// ================== Классы и наследование =====================

class Human {
    static isHuman = true

    humanGreet() {
        console.log('Greet from human')
    }
}

class Person extends Human {
    constructor(name,age) {
        super()
        this.name = name ?? 'Undefined Name'
        this.age = age ?? 'Undefined Age'
    }

    sayHello(){
        console.log('Hello from', this.name)
    }
}


const person1 = new Person('Timur',18) // экземляр класса
console.log(Person.isHuman)