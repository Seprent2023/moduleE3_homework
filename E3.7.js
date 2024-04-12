function mainFunc(a, b) {
    let start = a;
    let end = b;
    let currentTime = setInterval(function() {
        console.log(start);
        if (start == end) {
            clearInterval(currentTime);
        }
        start = start + 1;
    }, 1000);
}

mainFunc(1, 3);