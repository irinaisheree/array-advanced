function bombNumbers(numArr, bombArr){

    let bombNum = bombArr[0]
    let range = bombArr[1] * 2 + 1
    let sum = 0


    for(let i = 0; i < numArr.length; i++){

     if(numArr[i] === bombNum){

        let splicer = bombArr[1] + (numArr.length - i)
        numArr.splice(-splicer, range)
    }
    }

    for(let j = 0; j < numArr.length; j++){
        sum += numArr[j]
    }

console.log(sum)

}

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    )