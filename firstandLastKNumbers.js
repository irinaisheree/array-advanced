function firstandLastKNumbers(arr){

    let k = arr.shift()
    let firstK = arr.slice(0, k)
    let lastK = arr.slice(arr.length - k)

    console.log(firstK.join(' '))
    console.log(lastK.join(' '))

}

firstandLastKNumbers([2, 7, 8, 9])