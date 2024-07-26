function second (gender: string, height: number, weight: number){
    if (gender === 'เพศชาย' && height > 170 ||(weight > 50 && weight < 110)) { // === คือการเปรียบเทียบโดยสมบูรณ์แบบ  เปรียบเทียบทั้งค่า และ datatype
        console.log('จับใบดำใบแดง')             // == คือการเปรียบเทียบแค่ค่า
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}

second("เพศชาย",175,55)

//เวลาเทียบค่าน้ำหนักต้องประกาศตัวแปรทั้งสอง
