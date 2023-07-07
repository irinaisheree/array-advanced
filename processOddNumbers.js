function processOddNumbers(arr){

    let oddNumbersArray = arr.filter((el, i) => i % 2 !== 0)
    let doubleArray = oddNumbersArray.map(x => x *2)


    console.log(doubleArray.reverse().join(' '))

}
processOddNumbers([10, 15, 20, 25])