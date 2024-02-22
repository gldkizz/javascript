// console.log(new Date()) // конструктор 

// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// now.setFullYear(2055)
// console.log(now)


// const start = new Date(1000 * 60 * 60 * 24 * 365)
// const date = new Date(2011,0,4, 12, 42, 12) // год, месяц, день, часы, минуты, секунды
// console.log(date)

// console.log(now.toDateString()) // к красивому формату
// console.log(now.toTimeString()) // только время
// console.log(now.toLocaleDateString()) // формат через точку
// console.log(now.toLocaleTimeString()) // красивое время 16:50:56

// =================

let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name){
    return function () {
        mode = name
        update()
    }
}


fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')


setInterval(() => update(), 1000)
update()

function update(){
    output.textContent = format(mode)
}


// ========= Pure Function ==========
function format(formatMode) { // зависит только от своих входных данных
    const now = new Date()
    
    switch (formatMode) {
        case 'time': 
        return now.toLocaleTimeString()
        case 'date': 
        return now.toLocaleDateString()
        case 'full': 
        return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default: 
        return now.toLocaleTimeString()
    }
}
