//for loop
for (let i = 1; i<=5; i++) { //i++ คือการเพิ่มรอบ i+ 1
    console.log(i)
}

let sum: number = 0 //ทำหน้าที่เป็นกล่องกล่องหนึ่งรอรับค่า

for (let i = 1; i<=365; i++) { 
    sum = sum + i
}

console.log('total:', sum)

// while loop
// let i: number = 1
// let sum: number = 0 

// while(i <= 365) {
//     sum = sum + i
//     i++
// }

// console.log('total:', sum)

// let i: number = 1
// let sum: number = 0 

// do{
//     sum = sum + i
//     i++
// }while (i <= 365)

// console.log('total:', sum)

// let sum: number = 0
// let isBeark: boolean = false
// let row: number = 0 

// while (true) {
//     console.log('โสด')
//     row++
//     if (row === 3) {
//         break
//     }
// }

const myName: string = 'สุดสวย สวยสุด'
console.log(myName[2])//myName.charAt(2) ใช้ได้ทั้ง2แบบ


