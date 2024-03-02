// const Car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(Car)
// const parsed = JSON.parse(json)
// console.log(json)
// console.log(parsed)

const listEl = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value))
    render(filteredUsers)
})

async function start() {
    listEl.innerHTML = 'Loading...'
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            // method: 'GET' // необязательно
        })
        const data = await response.json()
        setTimeout(() => {
            USERS = data
            render(data)
        },2000)
        
    } catch(err) {
        listEl.style.color = 'red'
        listEl.innerHTML = err.message
    }
}

function render(users = []) {
    if (users.length === 0){
        listEl.innerHTML = 'No matched users'
    }else{
        const html = users.map(toHTML).join('')
        listEl.innerHTML = html
    }
    
}

function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>
    `
}

start()