function muOnline(data){
    let arr = data.split('|')  
    let rooms = 0
    let bitcoins = 0
    let initialHealth = 100
    
    for(let i = 0; i < arr.length; i++){
    
        let room = arr[i].split(' ')
       
        let command = room[0]
        let points = Number(room[1])
        

        
        switch(command){
            case "potion":
                let diff = 100 - initialHealth
                initialHealth += points


                if(initialHealth > 100){
                    console.log(`You healed for ${diff} hp.`)
                    initialHealth = 100
                    console.log(`Current health: ${initialHealth} hp.`)
                } else{
                console.log(`You healed for ${points} hp.`)
                console.log(`Current health: ${initialHealth} hp.`)
                }
                rooms++
               
                break;
            case "chest":
                bitcoins += points
                console.log(`You found ${points} bitcoins.`)
              rooms++
                break;
            default:
                
                initialHealth -= points
                rooms++

                if(initialHealth > 0){
                    console.log(`You slayed ${command}.`)
                   
                } else{
                    console.log(`You died! Killed by ${command}.`)
                    console.log(`Best room: ${rooms}`)
                    return;
                } 
                break;
        }

    }
    console.log("You've made it!")
    console.log(`Bitcoins: ${bitcoins}`)
    console.log(`Health: ${initialHealth}`)
    

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
console.log("-----------")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")