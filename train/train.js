function getNumberDigit(num,digitPosition) {
    strNum = num.toString()
    if(strNum.length - 1 >= digitPosition){
        return strNum[digitPosition]
    }else{
        return undefined
    }
}


console.log(getNumberDigit(123, 0)) // 1
console.log(getNumberDigit(123, 1)) // 2
console.log(getNumberDigit(123, 2)) // 3
console.log(getNumberDigit(123, 3)) // 3
console.log(getNumberDigit(1, 2)) // undefined