function smallestTwoNumbers(arr){

    arr.sort((a,b) => a - b)
    let newArr = []

    for(i = 0; i < 2; i++){
        newArr.push(arr[i])
    }

    console.log(newArr.join(' '))

}
smallestTwoNumbers([30, 15, 50, 5])