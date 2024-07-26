//function สามารถใช้งานแบบมี input หรือไม่มี input ได้และ มี output หรือไม่มี output ได้
function HelloWord() { //สามารถเรียกใช้ function ได้โดยไม่ต้องประกาศตัวแปร ไม่ต้องใส่ตัวแปร สามารถปริ้นคำส่งออกมาได้
    console.log('สวัสดีแนน')
}

HelloWord()

function secondHello(name: string) { //รับ input แต่ไม่ output 
   console.log(name)
   return name
}

console.log(secondHello('Bee')) //ที่ขึ้นundefinedเพราะ บอกให้ส่งของแต่ไม่ส่ง เลยขึ้น 

function getPi() {
    return 3.14
}
console.log(getPi()) //จะทำงานในวงเล็บก่อน