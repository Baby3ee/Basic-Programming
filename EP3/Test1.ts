//ถ้ามีแนนและปลื้มจะเริ่มสอน ถ้ามีแค่แนนหรือปลื้มจะไม่สอนต้องมีทั้งคู่(จริงและจริงเป็นจริง) &&และ
function start(fname: string, sname: string) {
    if (fname === 'nan' && sname === 'pleum') {
        console.log('เริ่มสอน')
    
    } else {
        console.log('ยังไม่สอน')
    }
}

start('nan','bee')


//ถ้ามีแนนหรือปลื้มจะสอน ถ้าไม่มีทั้งสองคนจะไม่สอน (เท็จหรือเท็จเป็นเท็จ) ||หรือ
function end(fname: string, sname: string) {
    if (fname === 'nan' || sname === 'pleum') {
        console.log('เริ่มสอน')
    
    } else {
        console.log('ยังไม่สอน')
    }
}

end('nan','bee')