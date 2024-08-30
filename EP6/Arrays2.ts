// const score: number[] = [10, 23, 26, 30, 33]
// let sum: number = 0
// for (let i = 0; i < score.length; i++){
//     sum = sum + score[i]
// }
// const avg = sum / score.length
// console.log('Total:', sum)
// console.log('Avg:', avg)



// const studentsName: string = 'แนน, ภู, บี, อ้นจี้, ลัคกี้, นัท, เอ็ม, ออม, ปลื้ม, ก๊อต'
// const studentsNameArray = studentsName.split(',')
// console.log(studentsNameArray)


// const studentsName: string = 'แนน, ภู, บี, อ้นจี้, ลัคกี้, นัท, เอ็ม, ออม, ปลื้ม, ก๊อต'
// const studentsNameArray = studentsName.split(',')
// console.log(studentsNameArray.length)



// const studentsName: string = 'แนน, ภู, บี, อ้นจี้, ลัคกี้, นัท, เอ็ม, ออม, ปลื้ม, ก๊อต'
// const studentsNameArray = studentsName.split(',')
// console.log(studentsNameArray[2])


// const studentsName: string = 'แนน, ภู, บี, อ้นจี้, ลัคกี้, นัท, เอ็ม, ออม, ปลื้ม, ก๊อต'
// const studentsNameArray = studentsName.split(',')
// console.log(studentsNameArray.toString())

// const studentsNameArray: string = 'แนน, ภู, บี, อ้นจี้, ลัคกี้, นัท, เอ็ม, ออม, ปลื้ม, ก๊อต'
// console.log(studentsNameArray.join('#')) คั่นด้วยตัว


// const AnimalName: string = 'หมา, แมว, กระต่าย, คาปิปาร้า '
// const AnimalNameArray = AnimalName.split(',')
// console.log(AnimalNameArray) //เปลี่ยนstring เป็น array


// const AnimalName: string = 'หมา*แมว*กระต่าย*คาปิปาร้า '
// const AnimalNameArray = AnimalName.split(',')
// console.log(AnimalNameArray)


// const animalName: string = 'หมา*แมว*กระต่าย*หมู'
// const animalNameArray: string[] = animalName.split('*')
// console.log('เดิม: ', animalNameArray)
// animalNameArray.pop() // ดึงตัวสุดท้ายออก (ดึงหมูออก)
// console.log('ดึงตัวสุดท้าย: ',animalNameArray)
// animalNameArray.push('กาปิบาร่า')
// console.log('ใส่ใหม่:',animalNameArray)


const animalName: string = 'หมา*แมว*กระต่าย*หมู'
const animalNameArray: string[] = animalName.split('*')
console.log('เดิม: ', animalNameArray)
animalNameArray.pop() // ดึงตัวสุดท้ายออก (ดึงหมูออก)
console.log('ดึงตัวสุดท้าย: ',animalNameArray)
animalNameArray.push('กาปิบาร่า')
console.log('ใส่่ท้าย:',animalNameArray)
animalNameArray.shift()
console.log('ดึงตัวหน้า: ',animalNameArray)
animalNameArray.unshift('แรด')
console.log('ใส่ตัวหน้า: ',animalNameArray)
console.log('เรียง ก-ฮ:',animalNameArray.sort())
console.log('เรียง ฮ-ก:',animalNameArray.reverse())
console.log('เรียง slice 0-2:',animalNameArray.slice(0, 2))


const fruits = ["Banana", "Orage", "Apple", "Mango"]
console.log('เรียง A-Z:',fruits.sort())
console.log('เรียง Z-A:',fruits.reverse())