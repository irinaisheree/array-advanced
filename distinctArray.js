function distinctArray(numbersArray){

    let uniqueArray = []

    for(number of numbersArray){
        if(!uniqueArray.includes(number)){
            uniqueArray.push(number)
        }
    }
    console.log(uniqueArray.join(' '))
}
distinctArray([7, 8, 9, 7, 2, 3,
    4, 1, 2])