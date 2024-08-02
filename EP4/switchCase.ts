// function sayHi(dayOfWeek: number) {
//    if (dayOfWeek === 1) {
//       console.log("วันอาทิตย์")
//    } else if (dayOfWeek === 2) {
//        console.log("วันจันทร์")
//   } else if (dayOfWeek === 3) {
//       console.log("วันอังคาร")
//    } else if (dayOfWeek === 4) {
//       console.log("วันพุธ")
//  } else if (dayOfWeek === 5) {
//      console.log("วันพฤหัสบดี")
//   } else if (dayOfWeek === 6) {
//        console.log("วันศุกร์")
//   } else if (dayOfWeek === 7) {
//       console.log("วันเสาร์")
//    }
// }

// sayHi(6)

//Switch Case Day of week
function sayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log("สวัสดีวันอาทิตย์")
            break
        case 2:
            console.log("สวัสดีวันจันทร์")
            break
        case 3:
            console.log("สวัสดีวันอังคาร")
            break
        case 4:
            console.log("สวัสดีวันพุธ")
            break
        case 5:
            console.log("สวัสดีวันพฤหัสบดี")
            break
        case 6:
            console.log("สวัสดีวันศุกร์")
            break
        case 7:
            console.log("สวัสดีวันเสาร์")
            break
        default:
            console.log("ระบุวันผิด")
            break
    }
}
sayHi(8)


//Switch Case BMI
function getBmi(w: number, h: number) {
    const bmi = w / ((h / 100) * (h / 100))

    switch (true) {
        default:
            console.log("ผิดพลาด")
            break
        case bmi < 18.50:
            console.log("น้ำหนักน้อย/ผอม")
            break
        case bmi >= 18.50 && bmi < 22.90:
            console.log("ปกติ(สุขภาพดี)")
            break
        case bmi >= 23 && bmi < 24.90:
            console.log("ท้วม / โรคอ้วนระดับ 1")
            break
        case bmi >= 25 && bmi < 29.90:
            console.log("อ้วน / โรคอ้วนระดับ 2")
            break
        case bmi >= 30:
            console.log("อ้วน / โรคอ้วนระดับ 3")
            break
    }
}