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
    listEl.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    inputEl.value = ''
})

function getNoteTemplate(note, index){
    return `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
>
    <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
    <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index=${index}>&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
    </span>
</li>
`
}
