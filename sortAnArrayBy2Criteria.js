function sortAnArrayBy2Criteria(input){

    let sorted = input.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length
        }
        return a.localeCompare(b)
    })
    console.log(sorted.join('\n'))
}
    // let sortedArr = input.sort((a,b) =>{
    //     return a.length - b.length || a.localeCompare(b)
    // })
 




sortAnArrayBy2Criteria(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George']
)