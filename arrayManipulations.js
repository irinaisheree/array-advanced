function arrayManipulations(commands){


    let arr = commands
    .shift()
    .split(' ')
    .map(Number)

    for(let i = 0; i < arr.length; i++){
        let [commands, firstNum, SecondNum] = commands[i].split(' ')

        firstNum = Number(firstNum)
        SecondNum = Number(SecondNum)

        switch (commands){
            case "Add":
                break;
            case "Remove":
                break;
            case "RemoveAt":
                break;
            case "Insert":
                break;
        }

        function add (el){
            arr.push(el)
        }

        function remove (num){
            arr = arr.filter(el => el !== num)
        }

        function removeAt (index){
            arr.splice(index, 1)
        }

        function insert(num, index){
            arr.splice(index, 0, num)
        }
    }

    console.log(arr.join(' '))





}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])