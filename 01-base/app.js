const resultEl = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+'

// console.log(typeof sum)

plusBtn.addEventListener('click', () => {
    action = '+'
})

minusBtn.addEventListener('click', () => {
    action = '-'
})

function printResult(result) {
    if (result < 0){
        resultEl.style.color = 'red'
    } else{
        resultEl.style.color = 'green'
    }
    resultEl.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return actionSymbol == '+' ? num1 + num2 : num1 - num2 // тернарный оператор
}

submitBtn.addEventListener('click', () => {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
})