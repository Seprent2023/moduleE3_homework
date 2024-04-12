function getEasyNumber(x) {
    if (x > 1000) {
        console.log('Данные неверны');
    } else if (x % 2 > 0 && x == 2) {
        console.log('Простое число');
    } else if (x === 2) {
        console.log('Просто число');
    } else {
        console.log('Составное')
    }
}
getEasyNumber()