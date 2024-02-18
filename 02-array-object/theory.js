// Array Theory

const names = ["Владилен", "Елена", "Игорь", "Ксения"];

names.push("Алёна"); // добавить элемент в конец массива(работает очень быстро)
names.unshift("Алёна"); // добавить элемент в начало массива(работает медленно при гигантском массиве)

names.shift(); // забирает первый элемент из массива и возвращает его
const firstName = names.shift();

names.pop(); // забирает последний элемент из массива и возвращает его
const name = names.pop();

names.reverse(); // переворачивает массив и меняет изначальный
names.toReversed(); // переворачивает массив и возвращает новый массив, не меняя оригинальный
const newArrayReversed = names.toReversed();

names.sort(); // сортирует буквы по алфавиту, цифры по возрастанию и вычитанию и изменяет оригинальный массив
names.sort((a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0); // по возрастанию
  // return b.charCodeAt(0) - a.charCodeAt(0) // по убыванию
});
names.toSorted(); // сортирует и не меняет оригинальный массив, возвращает новый

names.splice(2, 1); // удаляет из оригинального массива один элемент с индексом 2 и возвращает этот элемент в виде массива
const Igor = names.splice(2, 1); // ['Игорь']
names.toSpliced; // не меняет оригинальный массив и возвращает новый

const greateWoman = "Елена";
names.indexOf(greateWoman); // возвращает индекс с найденным элементом, если не нашёл, то возвращает -1
console.log(names[index]);
const newNames = names.with(index, "Елена Великая"); // не меняет оригинал, возвращает новый массив с изменённым элементом по индексу

const capitalNames = names.map((name, index) => {
  return name.toUpperCase; // вернёт новый массив с каждый элементом в верхнем регистре
  // if( index === 1){
  //     return 'Елена Великая'
  // }
  // return name
});

console.log(names.includes("Игорь")); // возвращает true или false, если в массиве есть такой элемент(или)
console.log(names.indexOf("Игорь") !== -1); // true or false

// ====================== Objects ====================

const people = [
  { name: "Владилен", budget: 4200 },
  { name: "Елена", budget: 15100 },
  { name: "Игорь", budget: 300 },
  { name: "Ксения", budget: 7520 },
];

/* let findedPerson
    for(let person of people) {
        if(person.budget === 7520){
            findedPerson = person
        }
    } !!!!!лучше не использовать!!!!
*/

const findedPerson = people.find((person) => {
  return person.budget === 7520;
});

// const finded = people.find((p) => p.budget === 7520);

const finded = people.findIndex( (p) => p.budget === 7520 ) // возвращает индекс

// const filtered = people.filter((p) => p.budget > 5000) // оригинал не затрагивает, возвращает новый массив с фильтром

// ========================= Пример использования ====================

const byBudget = (p) => p.budget > 5000
const pickBudget = (p) => p.budget

const sumBudget = people.filter(byBudget).map(pickBudget).reduce((acc, p) => acc + p, 0)

// const sumBudget = people.filter((p) => p.budget > 5000).map(p => p.budget).reduce((acc, p) => acc + p, 0) // функциональное программирование


const string = 'Привет, как дела?'
const reversed = string.split('').toReversed().join('!').split('').filter(c => c !== '!').join('')