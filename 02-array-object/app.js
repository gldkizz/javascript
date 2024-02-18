const inputEl = document.getElementById('title')
const createBtn = document.getElementById('create')
const listEl = document.getElementById('list')

/* Object Theory

const person = {
    firstName: 'Timur',
    lastName: 'Gapterakhmanov',
    year: 1993,
    hasGirlfriend: true,
    languages: ['ru','en'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.lastName)
    }
}

console.log(person.year)
console.log(person)
const key = 'hasGirlfriend'
console.log(person[key])
person.getFullName() 
*/

const notes = [
    {
        title: 'записать блок про масивы',
        completed: false
    }, 
    {
        title: 'рассказать теорию обьектов',
        completed: true
    }
]

function render() {
    listEl.innerHTML = ''
    if (notes.length === 0) {
        listEl.innerHTML = '<p>Нет элементов</p>'
    }
    for(let i = 0; i < notes.length;i++){
        listEl.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i],i))
    }

//     for (note of notes ) {
//         listEl.insertAdjacentHTML('beforeend',getNoteTemplate(note))
//     }
}
render()

createBtn.addEventListener('click', () => {
    if(inputEl.value.length === 0){
        return
    }
    const newNote = {
        title: inputEl.value,
        completed: false
    }
    notes.push(newNote)
    render()
    inputEl.value = ''
})

listEl.addEventListener('click', (event) => {
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }

        render()
    }
})

function getNoteTemplate(note, index){
    return `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
>
    <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
    <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
    <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
    </span>
</li>
`
}
