const boxFactory = {
    type: 'box',
    count: 0,
    produce: () => {
        boxFactory.count++
        return 'Box №' + boxFactory.count
    }
}

const produceBox = (produceFn) => {
    const boxName = produceFn()
    console.log(boxName)
}

for(i = 0; i < 25; i++){
    produceBox(boxFactory.produce)
}