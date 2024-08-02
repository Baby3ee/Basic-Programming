//จัดการเปลี่ยนค่าแล้วส่งออกไป
function fixedDecimal (n: number, digit: number){
   if (digit > 17) {
    return ("กดเยอะไปค่ะ")
   }
    const x = n.toFixed(digit)
    return x
}

console.log(fixedDecimal(50.18888888, 15))


//เป็นการใส่ลูกน้ำในค่า input
function fixNumBer( x: number){
    const  y = x.toLocaleString()
    return y
}

console.log(fixNumBer(80000)) 
    
//const str: string = " Rawiwan " เก็บตัวแปรแบบ string สามารถใช้ได้ทั้ง("",'')
    
// const str: string = "Rawiwan" 
// console.log(str.length) เป็นการนับตัวอักษร 

// const str: string = "Hello" 
// console.log(str.charAt(0))  เป็นการดึงตัวอักษรออกมา ตัวเเรกคือ 0

// const str: string = "ณเดชณ์ ณ บางคน บางคนใจเดียว บางคนหลายใจ บางคนแคร์ แคร์บางคน เกิดบางแค เลยช่วยแม่ขายข้าวมันไก่"
// console.log(str.charAt(str.length - 2)) เป็นการดึงตัวอักษรจากข้างหลัง -1 คือตัวแรก

//const str: string = "Rawiwan Changda"
//console.log(str.indexOf('R')) เป็นการหาเลขตัวอักษรว่าอยู่ตำแห่งไหน 0 หรือ 1 หรืออื่นๆภายในคำที่ต้องการหา

//const str: string = "      ณเดชณ์ ณ บางแค เลยช่วยแม่ขายข้าวมันไก่        "
//console.log(str.trim())  เป็นการเอาช่องว่างทั้งข้างหน้าและข้างหลังออก 
//console.log(str.trimStart()) เป็นการเอาช่องว่างด้านหน้าออก
//console.log(str.trimEnd()) เป็นการเอาช่องว่างด้านหลังออก


//const str: string = "Rawiwan Changda" 
//console.log(str.toUpperCase())    เปลี่ยนตัวอักษรเป็นตัวพิมพ์ใหญ่

//const str: string = "Rawiwan Changda"
//console.log(str.toLowerCase())    เปลี่ยนตัวอักษรเป็นตัวพิมพ์เล็ก

