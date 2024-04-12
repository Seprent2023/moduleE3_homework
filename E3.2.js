function getElement() {
let arr = [1, 2, 3, 0, 'a'];
even = 0;
zero = 0;
odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
          zero += 1;
      } else if (arr[i] % 2 === 0) {
          even += 1;
      } else {
          odd += 1;
      }
  }
}
    console.log(`${zero} ноль`);
    console.log(`${even} четных`);
    console.log(`${odd} нечетных`);
}
getElement()