function arrayModifier(data){

    let arr = data.shift().split(' ').map(e => Number(e))

    let index = 0

    let curCommand = data[index]
    
    index++

  
    while(curCommand !== "end"){

        curCommand = curCommand.split(' ')

        let command = curCommand[0]
        let index1 = curCommand[1]
        let index2 = curCommand[2]
        let indexToBeSwapped = arr[index1]

        switch(command){
            case "swap":
               arr[index1] = arr[index2]
               arr[index2] = indexToBeSwapped
               break;

            case "multiply":
                let result = arr[index1] * arr[index2]
                arr[index1] = result
              
                break;
            case "decrease":
                arr = arr.map(e => e-1)
                break;
        }

        curCommand = data[index]
        index++  
    }

  if(curCommand = "end") {

   console.log(arr.join(', '))}

}

arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])