function bonusSystem (data){
    let studentsCount = Number(data[0])
    let lecturesCount = Number(data[1])
    let bonusPoints = Number(data[2])
    let totalBonus = []
    let maxLectures = []

    for(let i = 3; i < data.length; i++){

        let curStudentAttendances = Number(data[i])
        let totalBonusPoints = curStudentAttendances / lecturesCount * (5 + bonusPoints)
        totalBonus.unshift(Math.ceil(totalBonusPoints))
        maxLectures.unshift(data[i])
        maxLecture.sort(((a,b) => b - a))
        let maxLecture = Math.ceil(maxLectures)
        console.log(maxLecture)
    }
    totalBonus.sort((a,b) => b - a)
    let highest = totalBonus[0]
    console.log(highest)
    
    
 

 

}

bonusSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])