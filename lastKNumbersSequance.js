function lastKNumbersSequance(n, k){

    let newArr = [1]
 

    while(n > newArr.length){
        let kArr = newArr.slice(-k)
        let sum = 0

        for(i = 0; i < kArr.length; i++){
            sum += kArr[i]
        }
        newArr.push(sum)
    }
    console.log(newArr.join(' '))

}
lastKNumbersSequance(6, 3)