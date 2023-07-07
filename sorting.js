function sorting(numbers){
   
    let sortedArr = numbers.sort((a,b) => b - a)
    let newArr = []
    let arrLength = numbers.length

    for(i = 0; i < arrLength; i++){
        let currentNum = sortedArr.shift()
        let nextNum = sortedArr.pop()

        newArr.push(currentNum)
        newArr.push(nextNum)
    }
    console.log(newArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94])