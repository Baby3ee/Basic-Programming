const str: string = `สวัสดี` // ` เรียกว่า Template strinng

console.log(str.charAt(1))

const fName: string = 'นายทดสอบ'
const lName: string = 'นามสกุล'

const fullName: string = fName + ' ' + lName
console.log('แบบใหม่'fullName)

console.log(fName.concat(" ", lName)) //การนำคำมาเชื่อมต่อกัน

const str1: string = "TypeScript"

console.log(str1.indexOf('p')) //หาตัว p ในคำ

const str2: string = "TypeScript"

console.log(str2.lastIndexOf('p')) //หาตัว p ตัวสุดท้าย ในคำ


const str3: string = "TypeScript"

console.log(str3.includes('p')) //จะบอกว่ามีตัวอักษรในคำนี้หรือไม่ ตอบแค่ จริงกับไม่จริง

const str4: string = "นางสาวทดสอบ นามสกุล"

console.log(str4.includes('นางสาว')) //จะบอกว่ามีตัวอักษรในคำนี้หรือไม่ ตอบแค่ จริงกับไม่จริง

const str5: string = 'Hello my Name is John I so happy'

console.log(str5.slice(str5.indexOf('John'), str5.indexOf('John') + "john".length)) //ใช้ตัดคำที่เราต้องการ ตำแหน่งสุดท้าย +1

const str6: string = "61,325.33:61,325.32:61,325.31:,325.30"

console.log(str6.split(':'))

const str: string = 'ยายแล่ม เมื่อตอนสาว ๆ'

console.log(str.replace('ยายแล่ม','อ้นจี้้')) //คือการแทนที่เฉพาะคำแรกที่เจอ

const str: string = 'ยายแล่ม เมื่อตอนสาว ๆ'

console.log(str.replaceAll('ยายแล่ม','อ้นจี้้')) //คือการแทนที่ทั้งหมดที่มี

const str: string = 'นายนอนน้อย  แต่นอนนะ'

console.log(str.replace('นาย', ' ')) // เอานายออกด้วยการใช้replace
