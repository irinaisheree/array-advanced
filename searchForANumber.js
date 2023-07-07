function searchForANumber(numbersArray, commandsArray){

let numbersToTake = commandsArray[0];
let numbersToDelete = commandsArray[1];
let searchedNumber = commandsArray[2];


let newArray = numbersArray.slice(0, numbersToTake);
newArray.splice(0, numbersToDelete)

let numberCounter = newArray.filter(e => e === searchedNumber).length;

console.log(`Number ${searchedNumber} occurs ${numberCounter} times.`)

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])