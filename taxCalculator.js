function taxCalculator(data){
    let arr = data.shift().split(">>")
   let curCase = arr[0] 
   let finalPrice = 0

    for(i = 0; i < arr.length; i++){
        curCase = arr[i].split(' ')


        
    let carType = curCase[0]
    let years = Number(curCase[1])
    let kilometers = Number(curCase[2])


        if(carType === "family"){

            let initialFamilyPrice = 50
            
            initialFamilyPrice -= 5 * years

            if(kilometers > 3000){
            let increaseTimes = Math.floor(kilometers / 3000)
            let increase = increaseTimes * 12
            let lastFamilyPrice = (initialFamilyPrice + increase)
            finalPrice += Number(lastFamilyPrice)
            console.log(`A ${carType} car will pay ${Number(lastFamilyPrice).toFixed(2)} euros in taxes.`)
    
            }
 
        }else if(carType === "heavyDuty"){
            let initialHeavyDutyPrice = 80

            initialHeavyDutyPrice -= 8 * years
            if(kilometers > 9000){
            let increaseTimes1 = Math.floor(kilometers / 9000)
            let increase1 = increaseTimes1 * 14
            let lastHeavyDutyPrice = (initialHeavyDutyPrice + increase1)
            finalPrice += Number(lastHeavyDutyPrice)

            console.log(`A ${carType} car will pay ${Number(lastHeavyDutyPrice).toFixed(2)} euros in taxes.`)
            }

        } else if(carType === "sports"){ 
            let initialSportsPrice = 100

            initialSportsPrice -= 9 * years
            if(kilometers > 2000){
                let increaseTimes2 = Math.floor(kilometers / 2000)
                let increase2 = increaseTimes2 * 18
                let lastSportsPrice = (initialSportsPrice + increase2)
                finalPrice += Number(lastSportsPrice)
                console.log(`A ${carType} car will pay ${Number(lastSportsPrice).toFixed(2)} euros in taxes.`)
        
        } 
    }else {
                 console.log('Invalid car type.')
        }
    
        }

        console.log(`The National Revenue Agency will collect ${finalPrice.toFixed(2)} euros in taxes.`)

    }


taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ])