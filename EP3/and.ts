//ถ้ามีแนนและปลื้มหรือโย จะเริ่มสอน หรือมีใครคนเดียวก็สอนขอแค่มี
function st(fname: string, sname: string, tname: string) {
    if (fname === 'nan' && sname === 'pleum' || tname === 'yo') {
        console.log('เริ่มสอน')
    
    } else {
        console.log('ยังไม่สอน')
    }
}
st('nan', 'pleum', 'yo')

//ถ้ามีแนนหรือปลื้มและโยจะสอน หรือมีแค่โยหรือใครสักคนถึงจะสอน
function ed(fname: string, sname: string, tname: string) {
    if (!(fname === 'nan' || sname === 'pleum') && tname === 'yo') { // ! เครื่องหมายนี้ทำหน้าที่ เป็นตัวกลับ ตย.จากจริงเป็นเท็จ จากเท็จเป็นจริง
        console.log('เริ่มสอน')
    
    } else {
        console.log('ยังไม่สอน')
    }
}
ed('nan', 'pleum', 'yo')